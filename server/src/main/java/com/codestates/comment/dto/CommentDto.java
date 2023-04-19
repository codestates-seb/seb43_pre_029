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
        private Long m_id;
        private Long q_id;
        private Long c_id;
        private String c_content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private String c_status;
    }
}
