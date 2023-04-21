package com.codestates.question.mapper;


import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.mapper.AnswerMapper;
import com.codestates.answer.response.AnswerResponseDto;
import com.codestates.member.dto.MemberDto;
import com.codestates.question.dto.QuestionDto;
import com.codestates.question.dto.QuestionResponseDto;
import com.codestates.question.entity.Question;
import org.apache.coyote.Response;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel ="spring")
public interface QuestionMapper {
    @Mapping(source="m_id", target = "member.m_id")
    Question questionPostDtoToQuestion(QuestionDto.Post questionPostDto);

    @Mapping(source="m_id", target = "member.m_id")
    Question questionPatchDtoToQuestion(QuestionDto.Patch questionPatchDto);

    @Mapping(source = "m_id", target = "member.m_id")
    Question questiondeleteDtoToQuestion(QuestionDto.Delete questionDeleteDto);

    @Mapping(source = "m_id", target = "member.m_id")
    Question acceptAnswerPatchDtoToQuestion(QuestionDto.AcceptAnswerPatch acceptAnswerPatch);

    default QuestionResponseDto questionToQuestionResponseDto(Question question){
        QuestionResponseDto questionResponseDto =
                QuestionResponseDto.builder()
                        .q_id(question.getQ_id())
                        .q_title(question.getQ_title())
                        .q_content1(question.getQ_content1())
                        .q_content2(question.getQ_content2())
                        .m_name(question.getMember().getName())
                        .viewCount(question.getViewCount())
                        .answerCount(question.getAnswers().stream().count())
                        .create_at(question.getCreated_at())
                        .last_modifined_at(question.getModified_at())

                        //TODO List<Answer>, List<Comment> 스트림 처리 -> dto 처리 해야함
//                        .answers(question.getAnswers().stream()
//                                .map(answer -> AnswerResponseDto.builder()
//                                        .a_id(answer.getA_id())
//                                        .a_content(answer.getA_content())
//                                        .member(MemberDto.MemberResponse.builder()
//                                                .id(answer.getMember().getM_id())
//                                                .name(answer.getMember().getName())
//                                                .build())
//                                        .created_at(answer.getCreated_at())
//                                        .build())
//                                .collect(Collectors.toList()))
//                        .comments(question.getComments().stream()
//                                .map(comment -> CommentResponseDto.builder()
//                                        .id(comment.getId())
//                                        .content(comment.getContent())
//                                        .member(MemberResponseDto.builder()
//                                                .id(comment.getMember().getId())
//                                                .name(comment.getMember().getName())
//                                                .build())
//                                        .createdAt(comment.getCreatedAt())
//                                        .modifiedAt(comment.getModifiedAt())
//                                        .build())
//                                .collect(Collectors.toList()))
//
//                        .answers(question.getAnswers().stream().map(answer -> answerMapper))
                        .build();

        return questionResponseDto;
    }

    //TODO question상태값 Question_delete 제외하고 response해줘야함
//    List<QuestionResponseDto> questionToQuestionResponseDtos(List<Question> questions){
//        questions.stream()
//                .filter(question -> !question.getQ_status().equals(Question.QuestionStatus.QUESTION_DELETE))
//                .collect(Collectors.toList());
//    }


}
