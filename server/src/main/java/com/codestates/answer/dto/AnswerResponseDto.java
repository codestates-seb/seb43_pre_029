package com.codestates.answer.dto;

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
    private Boolean accepted;
}
