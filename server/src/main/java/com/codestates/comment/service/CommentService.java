package com.codestates.comment.service;

import com.codestates.comment.entity.Comment;
import com.codestates.comment.repository.CommentRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
import com.codestates.member.service.MemberService;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final MemberService memberService;

    public CommentService(CommentRepository commentRepository, MemberService memberService){
        this.commentRepository = commentRepository;
        this.memberService = memberService;
    }

    // Comment 레포지토리에 등록하는 메서드 (POST 요청)
    public Comment registComment(Comment comment) {
        // 유효한 댓글인지 확인
        return commentRepository.save(comment);
    }

    // Comment 레포지토리에 등록된 댓글을 수정하는 메서드 (PATCH 요청)
    public Comment updateComment(Comment comment) {
        Comment findComment = findCommentById(comment.getC_id());
        // 존재하는 댓글인지 확인
        checkExistComment(findComment);
        // 수정 권한이 있는 멤버인지 확인
        Member requestMember = memberService.findMember(comment.getMember().getM_id());
        findComment.checkCommentAuthority(requestMember);

        // comment Update
        findComment.setC_comment(comment.getC_comment());
        return findComment;
    }
    // Comment Status 값을 DELETE 로 바꾼다
    public void deleteComment(long c_id) {
        Comment findComment = findCommentById(c_id);
        // 존재하는 댓글인지 확인
        checkExistComment(findComment);
        // 삭제 권한이 있는 멤버인지 확인

        //comment delete
        findComment.setC_status(Comment.CommentStatus.COMMENT_DELETE);
    }

    // 삭제된 Comment 가 아닌지 확인 (commentStatus)
    private void checkExistComment(Comment comment) {
        if(comment.getC_status() == Comment.CommentStatus.COMMENT_DELETE)
            throw new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND);
    }

    // CommentId 를 기반으로 레포지토리에서 Comment 를 찾아주는 메서드
    public Comment findCommentById(long c_id){
        Comment comment = commentRepository.findById(c_id)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));
        return comment;
    }


}
