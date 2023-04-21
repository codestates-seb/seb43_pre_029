package com.codestates.question.dto;

import com.codestates.answer.dto.AnswerResponseDto;
import com.codestates.comment.dto.CommentDto;
import com.codestates.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Builder
@Getter
@AllArgsConstructor
public class QuestionResponseDto {
    private Long m_id;
    private String m_name;
    private Long q_id;
    private String q_title;
    private String q_content1;
    private String q_content2;
    private Long suggestedCount;
    private Long viewCount;
    private Long answerCount;
    private LocalDateTime create_at;
    private LocalDateTime last_modifined_at;
    private List<CommentDto.CommentResponse> comments;
    private List<AnswerResponseDto> answers;
    private Question.QuestionStatus q_status;
}
