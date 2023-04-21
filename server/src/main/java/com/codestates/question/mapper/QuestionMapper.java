package com.codestates.question.mapper;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.dto.AnswerResponseDto;
import com.codestates.answer.entity.Answer;
import com.codestates.question.dto.QuestionDto;
import com.codestates.question.dto.QuestionResponseDto;
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

    @Mapping(source = "m_id", target = "member.m_id")
    Question questiondeleteDtoToQuestion(QuestionDto.Delete questionDeleteDto);

    default QuestionResponseDto questionToQuestionResponseDto(Question question){
        QuestionResponseDto questionResponseDto =
                QuestionResponseDto.builder()
                        .q_id(question.getQ_id())
                        .q_title(question.getQ_title())
                        .q_content1(question.getQ_content1())
                        .q_content2(question.getQ_content2())
                        .q_status(question.getQ_status())
                        .m_name(question.getMember().getName())
                        .viewCount(question.getViewCount())
                        .answerCount(question.getAnswers().stream().count())
                        .q_status(question.getQ_status())
                        .create_at(question.getCreated_at())
                        .last_modifined_at(question.getModified_at())
                        //TODO List<Answer>, List<Comment> 스트림 처리 -> dto 처리 해야함
                        .build();

        return questionResponseDto;
    }
}
