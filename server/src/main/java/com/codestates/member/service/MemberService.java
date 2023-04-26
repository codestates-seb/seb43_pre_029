package com.codestates.member.service;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
import com.codestates.member.mapper.MemberMapper;
import com.codestates.member.repository.MemberRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    public MemberService(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }
    // for test (멤버를 레포지토리에 등록하는 메서드)
    public Member registMember(Member member) {
        return memberRepository.save(member);
    }
    //
    public Member updateMember(Member member) {
        Member findMember = findMember(member.getM_id());
        // 삭제되지 않은 멤버인지 확인
        findMember.checkActiveMember(findMember);
        // 수정권한이 있는지 확인 (토큰기반 인증 가능한지)

        findMember.setName(member.getName());
        findMember.setAddress(member.getAddress());
        findMember.setStatus_message(member.getStatus_message());
        findMember.setPhone(member.getPhone());

        return memberRepository.save(findMember);
    }


    // 멤버의 상태 값을 MEMBER_DELETE 로 바꾸는 메서드
    public void deleteMember(long m_id){
        Member findMember = findMember(m_id);
        findMember.setM_status(Member.MemberStatus.MEMBER_DELETE);
        memberRepository.save(findMember);
    }
    // memberId를 통해 레포지토리에서 멤버를 찾아주는 메서드. 멤버가 존재하지 않으면 예외 발생 (MEMBER_NOT_FOUND)
    public Member findMember(long m_id) {
        Member findMember = memberRepository.findById(m_id)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    public Member findEmail(String email) {
        Member findEmail = memberRepository.findByEmail(email)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findEmail;
    }

    // for test (멤버를 ID 기반으로 찾아내 레포지토리에서 삭제하는 메서드)
//    public void removeMember(long m_Id) {
//        memberRepository.delete(memberRepository.findById(memberId).get());
//    }

}
