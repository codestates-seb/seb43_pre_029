package com.codestates.comment.dto;

import lombok.*;

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
    @Builder
    public static class CommentResponse{
        private Long m_id;
        private Long q_id;
        private Long c_id;
	private String m_name;
        private String c_comment;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
