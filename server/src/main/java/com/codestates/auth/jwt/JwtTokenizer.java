package com.codestates.auth.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

// ** JWT 생성 및 검증 **
@Component
public class JwtTokenizer {
	@Getter
	@Value("${jwt.key}")
	private String secretKey;	// JWT 생성 및 검증 시 사용되는 Secret Key 정보

	@Getter
	@Value("${jwt.access-token-expiration-minutes}")
	private int accessTokenExpirationMinutes;        // Access Token 대한 만료 시간 정보

	@Getter
	@Value("${jwt.refresh-token-expiration-minutes}")
	private int refreshTokenExpirationMinutes;          // Refresh Token 대한 만료 시간 정보

	// Secret Key 의 byte[]를 Base64 형식의 문자열로 인코딩
	public String encodeBase64SecretKey(String secretKey) {
		return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
	}

	// 인증된 사용자에게 JWT 최초로 발급
	public String generateAccessToken(Map<String, Object> claims,
																		String subject,
																		Date expiration,
																		String base64EncodedSecretKey) {
		Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);  //Base64 형식 Secret Key 문자열을 이용해 Key 객체를 얻음

		return Jwts.builder()
						.setClaims(claims)	// Custom Claims(인증된 사용자 정보) 추가
						.setSubject(subject)	// JWT 에 대한 제목을 추가
						.setIssuedAt(Calendar.getInstance().getTime())	// JWT 발행 일자를 설정
						.setExpiration(expiration)	// JWT 만료일시를 지정
						.signWith(key)	// 서명을 위한 Key 객체를 설정
						.compact();
	}


	// Refresh Token 생성
	public String generateRefreshToken(String subject, Date expiration, String base64EncodedSecretKey) {
		Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

		return Jwts.builder()
						.setSubject(subject)
						.setIssuedAt(Calendar.getInstance().getTime())
						.setExpiration(expiration)
						.signWith(key)
						.compact();
	}

	public Jws<Claims> getClaims(String jws, String base64EncodedSecretKey) {
		Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

		Jws<Claims> claims = Jwts.parserBuilder()
						.setSigningKey(key)
						.build()
						.parseClaimsJws(jws);
		return claims;
	}

	public void verifySignature(String jws, String base64EncodedSecretKey) {
		Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

		Jwts.parserBuilder()
						.setSigningKey(key)
						.build()
						.parseClaimsJws(jws);
	}

	// JWT 만료 일시를 지정 (JWT 생성 시 사용)
	public Date getTokenExpiration(int expirationMinutes) {
		Calendar calendar = Calendar.getInstance();
		calendar.add(Calendar.MINUTE, expirationMinutes);
		Date expiration = calendar.getTime();

		return expiration;
	}

	//  JWT 서명에 사용할 Secret Key 생성
	private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey) {
		byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);	// Secret Key 디코딩한 후, byte array 반환
		Key key = Keys.hmacShaKeyFor(keyBytes);	// HMAC 알고리즘을 적용한 Key 객체를 생성

		return key;
	}
}
