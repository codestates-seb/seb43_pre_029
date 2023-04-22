package com.codestates.member.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MemberDto {
    // Test용 PostDto
    @Getter
    public static class Post{
        @NotBlank
        private String name;
        @NotBlank
        private String password;
        @NotBlank
        @Email
        private String email;
        @NotBlank
        private String address;
        @NotBlank
        private String status_message;
        @NotBlank
        private String phone;

    }

    @Getter
    @AllArgsConstructor
    public static class Patch{
        // TODO: 양식 작성 -> 숫자 1개, 문자 1개, 8자 이상
        private String password;

        private String name;

        private String address;

        private String status_message;

        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다.")
        private String phone;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class MemberResponse{

        private String email;
        private String name;
        private String address;
        private String status_message;
        private String phone;
    }
    @Getter
    @Setter
    @AllArgsConstructor
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
