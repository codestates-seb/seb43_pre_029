package com.codestates.member.service;

import com.codestates.member.entity.Member;
import com.codestates.member.mapper.MemberMapper;
import com.codestates.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    public MemberService(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }
    // for test
    public Member assignMember(Member member) {
        return memberRepository.save(member);
    }
    // for test
    public void removeMember(long memberId) {
        memberRepository.delete(memberRepository.findById(memberId).get());
    }
}
