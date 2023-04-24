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
    @NoArgsConstructor
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
        private String status_message = "none";
        @NotBlank
        private String phone;

    }

    @Getter
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
