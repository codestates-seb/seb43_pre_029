package com.codestates.question.dto;

import ch.qos.logback.classic.pattern.LineOfCallerConverter;
import com.codestates.question.entity.Question;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

public class QuestionDto {

    @Getter
    public class Post {
        @Positive
        private Long m_id;

        @NotBlank
        private String title;

        @NotBlank
        private String content;
    }

    @Getter
    @Setter
    public static class Patch {
        @Positive
        private Long q_id;
        @Positive
        private Long m_id;

        @NotBlank
        private String title;

        @NotBlank
        private String content;
    }


    @Getter
    @Setter
    public static class SingleResponse {
        private Long q_id;
        private String title;
        private String content;
        private LocalDateTime create_at;
        private LocalDateTime last_modifined__at;
//        private AnswerResponseDto answerResponseDto;
//        private CommentResponseDto commentResponseDto;
        @NotNull
        private Question.QuestionStatus q_status;
    }


}
