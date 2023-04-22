package com.codestates.question.mapper;

import com.codestates.member.entity.Member;
import com.codestates.question.dto.QuestionDto.Patch;
import com.codestates.question.dto.QuestionDto.Post;
import com.codestates.question.dto.QuestionDto.SingleResponse;
import com.codestates.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-19T11:27:00+0900",
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

        return question;
    }

    @Override
    public List<SingleResponse> questionToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<SingleResponse> list = new ArrayList<SingleResponse>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionSingleResponseDto( question ) );
        }

        return list;
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
}
