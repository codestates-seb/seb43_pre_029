package com.codestates.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

public class CommentDto {
    @Getter
    @NoArgsConstructor
    public static class Post{
        private Long m_id;
        private Long q_id;
        private String c_comment;
    }

    @Getter
    @NoArgsConstructor
    public static class Patch{
        private Long m_id;
        private Long q_id;
        private Long c_id;
        private String c_comment;

    }

    @Getter
    @NoArgsConstructor
    public static class Delete{
        private Long m_id;
        private Long q_id;
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Setter
    public static class CommentResponse{
        private Long m_id;
        private Long q_id;
        private Long c_id;
        private String c_comment;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
