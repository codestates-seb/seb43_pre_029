package com.codestates.auth.dto;

import lombok.Getter;

// 역직렬화하기 위한 DTO 클래스
@Getter
public class LoginDto {
	private String username;
	private String password;
}