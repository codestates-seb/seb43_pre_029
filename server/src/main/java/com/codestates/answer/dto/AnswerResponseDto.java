package com.codestates.answer.dto;

import com.codestates.answer.entity.Answer;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
public class AnswerResponseDto {
    private Long q_id;
    private Long a_id;
    private Long m_id;
    private String a_content;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
    private Answer.AnswerStatus a_status;
    private Boolean accepted;
    private String m_name;
}
