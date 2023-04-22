package com.codestates.answer.dto;

import com.codestates.validator.NotSpace;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
@Setter
public class AnswerDto {
    @Positive
    private Long a_id;

    @Positive
    private Long q_id;

    @Positive
    private Long m_id;

    private String a_content;
}
