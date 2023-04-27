package com.codestates.question.dto;

import com.codestates.answer.entity.Answer;
import com.codestates.validator.NotSpace;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.util.List;

public class QuestionDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        @Positive
        private Long m_id;

        @NotBlank
        private String q_title;

        @NotBlank
        private String q_content;
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
        private String q_content;
    }

    @Getter
    public static class Delete {
        @Positive
        private Long q_id;
        @Positive
        private Long m_id;
    }

    @Getter
    public static class AcceptAnswerPatch{
        @Positive
        private Long q_id;
        @Positive
        private Long m_id;
    }
}
