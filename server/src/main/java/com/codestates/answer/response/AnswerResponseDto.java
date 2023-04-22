package com.codestates.answer.response;

import com.codestates.answer.entity.Answer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@AllArgsConstructor
public class AnswerResponseDto {
    private Long q_id;
    private Long a_id;
    private Long m_id;
    private String c_content;
    private Answer.AnswerStatus c_status;
}
