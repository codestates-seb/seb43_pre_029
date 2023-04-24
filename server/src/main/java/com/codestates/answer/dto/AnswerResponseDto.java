package com.codestates.answer.dto;

import com.codestates.answer.entity.Answer;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerResponseDto {
    private Long q_id;
    private Long a_id;
    private Long m_id;
    private String a_content;
    private LocalDateTime created_at;
    private LocalDateTime modified_at;
    private Answer.AnswerStatus a_status;
    private Boolean accepted;
}
