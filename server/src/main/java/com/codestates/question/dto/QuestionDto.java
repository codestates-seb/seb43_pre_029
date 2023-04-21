package com.codestates.question.dto;

import com.codestates.answer.dto.AnswerResponseDto;
import com.codestates.comment.dto.CommentDto;
import com.codestates.validator.NotSpace;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class QuestionDto {

    @Getter
    @AllArgsConstructor
    public class Post {
        @Positive
        private Long m_id;

        @NotBlank
        private String q_title;

        @NotBlank
        private String q_content1;

        @NotBlank
        private String q_content2;
    }

    @Getter
    @Setter
    public static class Patch {
        @Positive
        private Long q_id;

        @Positive
        private Long m_id;

        @NotSpace(message = "제목은 공백이 아니어야 합니다")
        private String q_title;

        @NotSpace(message = "내용은 공백이 아니어야 합니다")
        private String q_content1;

        @NotSpace(message = "내용은 공백이 아니어야 합니다")
        private String q_content2;


    }

    @Getter
    public static class Delete {
        @Positive
        private Long q_id;
        @Positive
        private Long m_id;
    }
}
