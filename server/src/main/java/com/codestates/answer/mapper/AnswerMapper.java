package com.codestates.answer.mapper;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    @Mapping(source = "m_id", target = "member.m_id")
    @Mapping(source = "q_id", target = "question.q_id")
    Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);
    default AnswerDto.SingleResponse answerToAnswerSingleResponseDto(Answer answer){
        AnswerDto.SingleResponse answerResponseDto = new AnswerDto.SingleResponse();
        return answerResponseDto;
    }

}
