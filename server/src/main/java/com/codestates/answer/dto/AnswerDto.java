package com.codestates.answer.dto;

import com.codestates.answer.entity.Answer;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class AnswerDto {
    @Setter
    @Getter
    public static class Patch{

    }
    @Getter
    public static class Post{

    }

    @Getter
    @Setter
    public static class SingleResponse {
        private Long q_id;
        private Long a_id;
        private Long m_id;
        private String a_content;
        private LocalDateTime created_at;
        private Boolean selection;
    }
}
