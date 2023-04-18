package com.codestates.member.service;

import com.codestates.member.mapper.MemberMapper;
import com.codestates.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
//    private final MemberMapper mapper;
    public MemberService(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
//        this.mapper = mapper;
    }

}
