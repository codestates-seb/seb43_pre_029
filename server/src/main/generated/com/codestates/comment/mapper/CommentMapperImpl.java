package com.codestates.comment.mapper;

import com.codestates.comment.dto.CommentDto.CommentResponse;
import com.codestates.comment.dto.CommentDto.Patch;
import com.codestates.comment.dto.CommentDto.Post;
import com.codestates.comment.entity.Comment;
import java.time.LocalDateTime;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-23T22:23:18+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class CommentMapperImpl implements CommentMapper {

    @Override
    public Comment CommentPostDtoToComment(Post commentPostDto) {
        if ( commentPostDto == null ) {
            return null;
        }

        Comment comment = new Comment();

        return comment;
    }

    @Override
    public Comment CommentPatchDtoToComment(Patch commentPatchDto) {
        if ( commentPatchDto == null ) {
            return null;
        }

        Comment comment = new Comment();

        comment.setC_id( commentPatchDto.getC_id() );
        comment.setC_comment( commentPatchDto.getC_comment() );

        return comment;
    }

    @Override
    public CommentResponse CommentToCommentResponseDto(Comment comment) {
        if ( comment == null ) {
            return null;
        }

        Long c_id = null;

        c_id = comment.getC_id();

        Long m_id = null;
        Long q_id = null;
        String c_content = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;

        CommentResponse commentResponse = new CommentResponse( m_id, q_id, c_id, c_content, createdAt, modifiedAt );

        return commentResponse;
    }
}
