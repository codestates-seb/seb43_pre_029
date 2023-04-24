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
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@Slf4j
@Validated
@RequestMapping("/member")
@CrossOrigin(origins = "*")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;
    private final JwtService jwtService;
    private final static String MEMBER_DEFAULT_URL = "/member";
    public MemberController(MemberService memberService, MemberMapper memberMapper, JwtService jwtService){
        this.memberService = memberService;
        this.memberMapper = memberMapper;
        this.jwtService = jwtService;
    }
//     for test
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = memberMapper.MemberPostDtoToMember(requestBody);

        Member createdMember = jwtService.createMember(member);
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, createdMember.getM_id());

        return ResponseEntity.created(location).build();
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
}
