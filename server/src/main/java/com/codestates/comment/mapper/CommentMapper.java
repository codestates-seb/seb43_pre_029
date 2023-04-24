package com.codestates.comment.mapper;

import com.codestates.comment.dto.CommentDto;
import com.codestates.comment.entity.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    default Comment CommentPostDtoToComment (CommentDto.Post commentPostDto){
        Comment comment = new Comment();
        comment.setC_comment(commentPostDto.getC_comment());
        return comment;
    };
    default Comment CommentPatchDtoToComment (CommentDto.Patch commentPatchDto){
        Comment comment = new Comment();
        comment.setC_comment(commentPatchDto.getC_comment());
        comment.setC_id(commentPatchDto.getC_id());
        return comment;
    };
//    @Mapping(target = "m_id", source = "member.m_id")
//    @Mapping(target = "q_id", source = "question.q_id")
    default CommentDto.CommentResponse CommentToCommentResponseDto(Comment comment){
        return CommentDto.CommentResponse.builder()
                .m_id(comment.getMember().getM_id())
                .q_id(comment.getQuestion().getQ_id())
                .c_id(comment.getC_id())
                .c_comment(comment.getC_comment())
                .createdAt(comment.getCreatedAt())
                .modifiedAt(comment.getModifiedAt())
                .build();
    };
}
