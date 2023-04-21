package com.codestates.auth.filter;

import com.codestates.auth.dto.LoginDto;
import com.codestates.auth.jwt.JwtTokenizer;
import com.codestates.member.entity.Member;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

// 로그인 인증 정보를 직접적으로 수신하여 인증 처리의 엔트리포인트 역할
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	private final AuthenticationManager authenticationManager;
	private final JwtTokenizer jwtTokenizer;

	public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtTokenizer jwtTokenizer) {
		this.authenticationManager = authenticationManager;
		this.jwtTokenizer = jwtTokenizer;
	}

	// 메서드 내부에서 인증을 시도하는 로직을 구현
	@SneakyThrows
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) {

		ObjectMapper objectMapper = new ObjectMapper();    // DTO 클래스로 역직렬화(Deserialization) 하기 위해 ObjectMapper 인스턴스를 생성
		LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class); // LoginDto 클래스의 객체로 역직렬화


		UsernamePasswordAuthenticationToken authenticationToken =
						new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());

		return authenticationManager.authenticate(authenticationToken);  // UsernamePasswordAuthenticationToken 을 AuthenticationManager 에게 전달하면서 인증 처리를 위임
	}

	// 클라이언트의 인증 정보를 이용해 인증에 성공할 경우 호출
	@Override
	protected void successfulAuthentication(HttpServletRequest request,
																					HttpServletResponse response,
																					FilterChain chain,
																					Authentication authResult) {
		Member member = (Member) authResult.getPrincipal();  // Member 엔티티 클래스의 객체를 얻음

		String accessToken = delegateAccessToken(member);   // Access Token 생성
		String refreshToken = delegateRefreshToken(member); // Refresh Token 생성

		response.setHeader("Authorization", "Bearer " + accessToken);  // Access Token 추가 (클라이언트 측의 자격 증명에 사용)
		response.setHeader("Refresh", refreshToken);                   // Refresh Token 추가
	}

	//  Access Token 생성
	private String delegateAccessToken(Member member) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("username", member.getEmail());
		claims.put("roles", member.getRoles());

		String subject = member.getEmail();
		Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

		String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

		String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

		return accessToken;
	}

	// Refresh Token 생성
	private String delegateRefreshToken(Member member) {
		String subject = member.getEmail();
		Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());
		String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

		String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

		return refreshToken;
	}
}
