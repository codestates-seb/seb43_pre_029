package com.codestates.member.controller;

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

@RestController
@Slf4j
@Validated
@RequestMapping("/member")
@CrossOrigin(origins = "*")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper memberMapper;

    public MemberController(MemberService memberService, MemberMapper memberMapper){
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }
//     for test
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody){
        Member member = memberMapper.MemberPostDtoToMember(requestBody);
        Member response = memberService.registMember(member);
        return new ResponseEntity(memberMapper.MemberToMemberResponseDto(response), HttpStatus.CREATED);
    }

    @PatchMapping("/edit")
    public ResponseEntity editMember(@Valid @RequestBody MemberDto.Patch requestBody){
        Member member = memberMapper.MemberPatchDtoToMember(requestBody);
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
