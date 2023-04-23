package com.codestates.answer.mapper;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.dto.AnswerResponseDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    @Mapping(source = "m_id", target = "member.m_id")
    @Mapping(source = "q_id", target = "question.q_id")
    Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);

    @Mapping(source = "m_id", target = "member.m_id")
    @Mapping(source = "q_id", target = "question.q_id")
    Answer answerPatchDtoToPatch(AnswerDto.Patch answerPatchDto);

    @Mapping(source = "m_id", target = "member.m_id")
    Answer answerDeleteDtoToAnswer(AnswerDto.Delete answerDeleteDto);

    @Mapping(source = "member.m_id", target = "m_id")
    @Mapping(source = "question.q_id", target = "q_id")
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
}
