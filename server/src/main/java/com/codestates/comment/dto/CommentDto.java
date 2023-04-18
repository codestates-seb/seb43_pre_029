package com.codestates.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

public class CommentDto {
    @Getter
    public static class Post{

    }

    @Getter
    @AllArgsConstructor
    public static class Patch{

    }

    @Getter
    @AllArgsConstructor
    public static class CommentResponse{
        private Long memberId;
        private Long questionId;
        private Long commentId;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String commentStatus;
    }
}
