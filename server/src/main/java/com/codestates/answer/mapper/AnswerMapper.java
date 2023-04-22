package com.codestates.answer.mapper;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.answer.response.AnswerResponseDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    @Mapping(source = "m_id", target = "member.m_id")
    @Mapping(source = "q_id", target = "question.q_id")
    Answer answerDtoToAnswer(AnswerDto answerDto);

    @Mapping(source = "m_id", target = "member.m_id")
    @Mapping(source = "q_id", target = "question.q_id")
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}