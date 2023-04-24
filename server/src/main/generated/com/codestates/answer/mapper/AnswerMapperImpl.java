package com.codestates.answer.mapper;

import com.codestates.answer.dto.AnswerDto.Delete;
import com.codestates.answer.dto.AnswerDto.Patch;
import com.codestates.answer.dto.AnswerDto.Post;
import com.codestates.answer.entity.Answer;
import com.codestates.member.entity.Member;
import com.codestates.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-24T13:27:11+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(Post answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setMember( postToMember( answerPostDto ) );
        answer.setQuestion( postToQuestion( answerPostDto ) );
        answer.setA_content( answerPostDto.getA_content() );

        return answer;
    }

    @Override
    public Answer answerPatchDtoToPatch(Patch answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setMember( patchToMember( answerPatchDto ) );
        answer.setQuestion( patchToQuestion( answerPatchDto ) );
        answer.setA_id( answerPatchDto.getA_id() );
        answer.setA_content( answerPatchDto.getA_content() );

        return answer;
    }

    @Override
    public Answer answerDeleteDtoToAnswer(Delete answerDeleteDto) {
        if ( answerDeleteDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setMember( deleteToMember( answerDeleteDto ) );
        answer.setA_id( answerDeleteDto.getA_id() );

        return answer;
    }

    protected Member postToMember(Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setM_id( post.getM_id() );

        return member;
    }

    protected Question postToQuestion(Post post) {
        if ( post == null ) {
            return null;
        }

        Question question = new Question();

        question.setQ_id( post.getQ_id() );

        return question;
    }

    protected Member patchToMember(Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Member member = new Member();

        member.setM_id( patch.getM_id() );

        return member;
    }

    protected Question patchToQuestion(Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Question question = new Question();

        question.setQ_id( patch.getQ_id() );

        return question;
    }

    protected Member deleteToMember(Delete delete) {
        if ( delete == null ) {
            return null;
        }

        Member member = new Member();

        member.setM_id( delete.getM_id() );

        return member;
    }
}
