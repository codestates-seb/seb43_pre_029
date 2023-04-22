package com.codestates.answer.mapper;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.dto.AnswerResponseDto;
import com.codestates.answer.entity.Answer;
import com.codestates.member.entity.Member;
import com.codestates.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-22T14:05:29+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerDtoToAnswer(AnswerDto answerDto) {
        if ( answerDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setMember( answerDtoToMember( answerDto ) );
        answer.setQuestion( answerDtoToQuestion( answerDto ) );
        answer.setA_id( answerDto.getA_id() );
        answer.setA_content( answerDto.getA_content() );

        return answer;
    }

    @Override
    public AnswerResponseDto answerToAnswerResponseDto(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        AnswerResponseDto answerResponseDto = new AnswerResponseDto();

        answerResponseDto.setM_id( answerMemberM_id( answer ) );
        answerResponseDto.setQ_id( answerQuestionQ_id( answer ) );
        answerResponseDto.setA_id( answer.getA_id() );
        answerResponseDto.setA_content( answer.getA_content() );
        answerResponseDto.setCreated_at( answer.getCreated_at() );
        answerResponseDto.setAccepted( answer.getAccepted() );

        return answerResponseDto;
    }

    protected Member answerDtoToMember(AnswerDto answerDto) {
        if ( answerDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setM_id( answerDto.getM_id() );

        return member;
    }

    protected Question answerDtoToQuestion(AnswerDto answerDto) {
        if ( answerDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setQ_id( answerDto.getQ_id() );

        return question;
    }

    private Long answerMemberM_id(Answer answer) {
        if ( answer == null ) {
            return null;
        }
        Member member = answer.getMember();
        if ( member == null ) {
            return null;
        }
        Long m_id = member.getM_id();
        if ( m_id == null ) {
            return null;
        }
        return m_id;
    }

    private Long answerQuestionQ_id(Answer answer) {
        if ( answer == null ) {
            return null;
        }
        Question question = answer.getQuestion();
        if ( question == null ) {
            return null;
        }
        Long q_id = question.getQ_id();
        if ( q_id == null ) {
            return null;
        }
        return q_id;
    }
}
