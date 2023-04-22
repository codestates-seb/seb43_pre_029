package com.codestates.answer.dto;

import com.codestates.validator.NotSpace;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class AnswerDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post{
        @Positive
        private Long q_id;

        @Positive
        private Long m_id;

        @NotBlank
        private String a_content;

    }

    @Getter
    @Setter
    public static class Patch{
        @Positive
        private Long a_id;
        @Positive
        private Long q_id;

        @Positive
        private Long m_id;

        @NotSpace(message = "내용은 공백이 아니어야합니다.")
        private String a_content;
    }

    @Getter
    public static class Delete{
        @Positive
        private Long a_id;
        @Positive
        private Long m_id;
    }








}
