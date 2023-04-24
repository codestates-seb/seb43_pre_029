package com.codestates.comment.mapper;

import com.codestates.comment.dto.CommentDto.CommentResponse;
import com.codestates.comment.entity.Comment;
import com.codestates.member.entity.Member;
import com.codestates.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-24T10:52:28+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

    @Override
    public CommentResponse CommentToCommentResponseDto(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        CommentResponse commentResponse = new CommentResponse();

        commentResponse.setM_id( commentMemberM_id( comment ) );
        commentResponse.setQ_id( commentQuestionQ_id( comment ) );
        commentResponse.setC_id( comment.getC_id() );
        commentResponse.setC_comment( comment.getC_comment() );

        return commentResponse;
    }

    private Long commentMemberM_id(Comment comment) {
        if ( comment == null ) {
            return null;
        }
        Member member = comment.getMember();
        if ( member == null ) {
            return null;
        }
        Long m_id = member.getM_id();
        if ( m_id == null ) {
            return null;
        }
        return m_id;
    }

    private Long commentQuestionQ_id(Comment comment) {
        if ( comment == null ) {
            return null;
        }
        Question question = comment.getQuestion();
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
