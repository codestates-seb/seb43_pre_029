package com.codestates.auth.service;

import com.codestates.auth.utils.CustomAuthorityUtils;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.helper.MemberRegistrationApplicationEvent;
import com.codestates.member.entity.Member;
import com.codestates.member.repository.MemberRepository;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

// ** 사용자 등록 시, 패스워드와 사용자 권한 저장 **
@Transactional
@Service
public class JwtService {
	private final MemberRepository memberRepository;
	private final ApplicationEventPublisher publisher;
	private final PasswordEncoder passwordEncoder;
	private final CustomAuthorityUtils authorityUtils;

	public JwtService(MemberRepository memberRepository,
											 ApplicationEventPublisher publisher,
											 PasswordEncoder passwordEncoder,
											 CustomAuthorityUtils authorityUtils) {
		this.memberRepository = memberRepository;
		this.publisher = publisher;
		this.passwordEncoder = passwordEncoder;
		this.authorityUtils = authorityUtils;
	}

	// 회원가입 로직
	public Member createMember(Member member) {
		verifyExistsEmail(member.getEmail());

		String encryptedPassword = passwordEncoder.encode(member.getPassword());	// Password 암호화
		member.setPassword(encryptedPassword);

		List<String> roles = authorityUtils.createRoles(member.getEmail());	// DB에 User Role 저장
		member.setRoles(roles);

		Member savedMember = memberRepository.save(member);

		publisher.publishEvent(new MemberRegistrationApplicationEvent(savedMember));
		return savedMember;
	}


	@Transactional(readOnly = true)
	public Member findVerifiedMember(long memberId) {
		Optional<Member> optionalMember =
						memberRepository.findById(memberId);
		Member findMember =
						optionalMember.orElseThrow(() ->
										new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
		return findMember;
	}

	private void verifyExistsEmail(String email) {
		Optional<Member> member = memberRepository.findByEmail(email);
		if (member.isPresent())
			throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
	}

	public boolean checkEmail(String email) {
		Optional<Member> member = memberRepository.findByEmail(email);
		if (member.isPresent()) {
			return true;
		} else {
			return false;
		}
	}
}
