package com.codestates.member.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {
    // Test용 PostDto
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post{
        private String name;
        private String password;
        @Email
        private String email;
        private String address;
        private String status_message = "none";
        private String phone;
    }

	@Getter
	@Setter
	@NoArgsConstructor
	public static class Login_Response{
		private Long m_id;
	}

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch{
        // TODO: 양식 작성 -> 숫자 1개, 문자 1개, 8자 이상
        private String password;

        private String name;

        private String address;

        private String status_message;

        private String phone;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MemberResponse{

        private String email;
        private String name;
        private String address;
        private String status_message;
        private String phone;
    }
    @Getter
    @Setter
    @NoArgsConstructor
    public static class MemberGetResponse{
        private String email;
        private String name;
        private String address;
        private String status_message;
        private Long activityCount;
        private Long commentCount;
        private Long answerCount;
        private Long questionCount;
    }
}
