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

//    @Mapping(source = "member.m_id", target = "m_id")
//    @Mapping(source = "question.q_id", target = "q_id")
    default AnswerResponseDto answerToAnswerResponseDto(Answer answer){
        return AnswerResponseDto
                .builder()
                .a_id(answer.getA_id())
                .m_id(answer.getMember().getM_id())
                .q_id(answer.getQuestion().getQ_id())
                .m_name(answer.getMember().getName())
                .a_content(answer.getA_content())
                .createdAt(answer.getCreatedAt())
                .modifiedAt(answer.getModifiedAt())
                .a_status(answer.getA_status())
                .accepted(answer.getAccepted())
                .build();
    };
}
