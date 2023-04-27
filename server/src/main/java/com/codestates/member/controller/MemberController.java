package com.codestates.member.controller;

import com.codestates.auth.service.JwtService;
import com.codestates.auth.utils.UriCreator;
import com.codestates.member.dto.MemberDto;
import com.codestates.member.entity.Member;
import com.codestates.member.mapper.MemberMapper;
import com.codestates.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.Optional;

@RestController
@Slf4j
@Validated
@RequestMapping("/member")
@CrossOrigin(origins = "*")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final static String MEMBER_DEFAULT_URL = "/member";
    public MemberController(MemberService memberService, MemberMapper memberMapper, JwtService jwtService, PasswordEncoder passwordEncoder){
        this.memberService = memberService;
        this.memberMapper = memberMapper;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }
//     for test
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = memberMapper.MemberPostDtoToMember(requestBody);
	System.out.println(member.getPassword());
        Member createdMember = jwtService.createMember(member);
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, createdMember.getM_id());

        return new ResponseEntity(memberMapper.testMapper(member), HttpStatus.CREATED);
    }

    @PatchMapping("/edit/{m_id}")
    public ResponseEntity editMember(@PathVariable("m_id") Long m_id,
                                     @Valid @RequestBody MemberDto.Patch requestBody){
        Member member = memberMapper.MemberPatchDtoToMember(requestBody);
        member.setM_id(m_id);
        // 스택오버플로 회원인지 확인
        // 로그인 확인 로직
        Member response = memberService.updateMember(member);
        return new ResponseEntity(memberMapper.MemberToMemberResponseDto(response), HttpStatus.OK);
    }

    @PatchMapping("/edit/password/{m_id}")
    public ResponseEntity editPassword(@PathVariable("m_id") Long m_id,
                                       @RequestBody MemberDto.PatchPassword requestBody) {
        Member member = memberService.findMember(m_id);
        String encryptedPassword = passwordEncoder.encode(requestBody.getPassword());	// Password 암호화
        member.setPassword(encryptedPassword);

        memberService.updateMember(member);
        return new ResponseEntity(memberMapper.MemberToMemberGetResponse(member), HttpStatus.OK);
    }

    @GetMapping("/{m_id}")
    public ResponseEntity getMember(@PathVariable("m_id") @Positive long m_id){
        // 로그인 확인 로직(인증)
        Member response = memberService.findMember(m_id);
        return new ResponseEntity(memberMapper.MemberToMemberGetResponse(response), HttpStatus.OK);
    }
    // for test
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
        // 권한 인증
        memberService.deleteMember(memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    // 이메일 중복 확인
    @GetMapping("/check-email")
    public boolean checkEmail(@RequestBody MemberDto.CheckEmail requestBody) {
        String email = requestBody.getEmail();

        return !jwtService.checkEmail(email);
    }

    // password 확인
    @GetMapping("/check-password")
    public boolean checkPassword(@RequestBody MemberDto.CheckPassword requestBody) {
        Member member = memberService.findEmail(requestBody.getEmail());
        String password = requestBody.getPassword();

        return passwordEncoder.matches(password, member.getPassword());      // password 를 암호화하여 일치여부 확인
    }
}
