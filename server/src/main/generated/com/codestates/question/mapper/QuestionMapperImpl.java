package com.codestates.question.mapper;

import com.codestates.member.entity.Member;
import com.codestates.question.dto.QuestionDto.AcceptAnswerPatch;
import com.codestates.question.dto.QuestionDto.Delete;
import com.codestates.question.dto.QuestionDto.Patch;
import com.codestates.question.dto.QuestionDto.Post;
import com.codestates.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-24T11:40:12+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(Post questionPostDto) {
        if ( questionPostDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setMember( postToMember( questionPostDto ) );
        question.setQ_title( questionPostDto.getQ_title() );
        question.setQ_content1( questionPostDto.getQ_content1() );
        question.setQ_content2( questionPostDto.getQ_content2() );

        return question;
    }

    @Override
    public Question questionPatchDtoToQuestion(Patch questionPatchDto) {
        if ( questionPatchDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setMember( patchToMember( questionPatchDto ) );
        question.setQ_id( questionPatchDto.getQ_id() );
        question.setQ_title( questionPatchDto.getQ_title() );
        question.setQ_content1( questionPatchDto.getQ_content1() );
        question.setQ_content2( questionPatchDto.getQ_content2() );

        return question;
    }

    @Override
    public Question questiondeleteDtoToQuestion(Delete questionDeleteDto) {
        if ( questionDeleteDto == null ) {
            return null;
        }

        Question question = new Question();

        question.setMember( deleteToMember( questionDeleteDto ) );
        question.setQ_id( questionDeleteDto.getQ_id() );

        return question;
    }

    @Override
    public Question acceptAnswerPatchDtoToQuestion(AcceptAnswerPatch acceptAnswerPatch) {
        if ( acceptAnswerPatch == null ) {
            return null;
        }

        Question question = new Question();

        question.setMember( acceptAnswerPatchToMember( acceptAnswerPatch ) );
        question.setQ_id( acceptAnswerPatch.getQ_id() );

        return question;
    }

    protected Member postToMember(Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setM_id( post.getM_id() );

        return member;
    }

    protected Member patchToMember(Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Member member = new Member();

        member.setM_id( patch.getM_id() );

        return member;
    }

    protected Member deleteToMember(Delete delete) {
        if ( delete == null ) {
            return null;
        }

        Member member = new Member();

        member.setM_id( delete.getM_id() );

        return member;
    }

    protected Member acceptAnswerPatchToMember(AcceptAnswerPatch acceptAnswerPatch) {
        if ( acceptAnswerPatch == null ) {
            return null;
        }

        Member member = new Member();

        member.setM_id( acceptAnswerPatch.getM_id() );

        return member;
    }
}
