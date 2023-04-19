package com.codestates.question.mapper;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.question.dto.QuestionDto;
import com.codestates.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel ="spring")
public interface QuestionMapper {
    @Mapping(source="m_id", target = "member.m_id")
    Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto);

    @Mapping(source="m_id", target = "member.m_id")
    Question questionPatchDtoToQuestion(QuestionDto.Patch questionPatchDto);

    List<QuestionDto.SingleResponse> questionToQuestionResponseDtos(List<Question> questions);
    default QuestionDto.SingleResponse questionToQuestionSingleResponseDto(Question questions){
        QuestionDto.SingleResponse questionResponseDto = new QuestionDto.SingleResponse();
        return questionResponseDto;
    }


}
