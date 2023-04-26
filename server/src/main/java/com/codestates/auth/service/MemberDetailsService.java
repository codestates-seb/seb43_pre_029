package com.codestates.auth.service;

import com.codestates.auth.utils.CustomAuthorityUtils;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
import com.codestates.member.repository.MemberRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;


// ** 사용자의 크리덴셜을 조회한 후, 조회한 크리덴셜을 AuthenticationManager 에게 전달 **
@Component
public class MemberDetailsService implements UserDetailsService {
	private final MemberRepository memberRepository;
	private final CustomAuthorityUtils authorityUtils;

	public MemberDetailsService(MemberRepository memberRepository, CustomAuthorityUtils authorityUtils) {
		this.memberRepository = memberRepository;
		this.authorityUtils = authorityUtils;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Member> optionalMember = memberRepository.findByEmail(username);
		Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

		return new MemberDetails(findMember);
	}

	private final class MemberDetails extends Member implements UserDetails {
		MemberDetails(Member member) {
			setM_id(member.getM_id());
			setEmail(member.getEmail());
			setPassword(member.getPassword());
			setRoles(member.getRoles());
		}

		@Override
		public Collection<? extends GrantedAuthority> getAuthorities() {
			return authorityUtils.createAuthorities(this.getRoles());	// User 권한 정보를 생성
		}

		@Override
		public String getUsername() {
			return getEmail();
		}	// username 을 Member 클래스의 email 주소로 채움

		@Override
		public boolean isAccountNonExpired() {
			return true;
		}

		@Override
		public boolean isAccountNonLocked() {
			return true;
		}

		@Override
		public boolean isCredentialsNonExpired() {
			return true;
		}

		@Override
		public boolean isEnabled() {
			return true;
		}
	}
}