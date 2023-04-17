package com.codestates.member.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;

public class MemberDto {
    @Getter
    public static class Post{

    }

    @Getter
    @AllArgsConstructor
    public static class Patch{

    }

    @Getter
    @AllArgsConstructor
    public static class MemberResponse{
        private String email;
        private String name;
        private String address;
        private String statusMessage;
    }

    @Getter
    @AllArgsConstructor
    public static class MemberGetResponse{
        private String email;
        private String name;
        private String address;
        private String statusMessage;
        private Long activityCount;
        private Long commentCount;
        private Long answerCount;
    }
}
