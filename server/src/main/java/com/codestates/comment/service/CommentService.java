package com.codestates.comment.service;

import com.codestates.answer.entity.Answer;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.repository.CommentRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
import com.codestates.member.service.MemberService;
import com.codestates.question.service.QuestionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    public CommentService(CommentRepository commentRepository, MemberService memberService, QuestionService questionService){
        this.commentRepository = commentRepository;
        this.memberService = memberService;
        this.questionService = questionService;
    }

    // Comment 레포지토리에 등록하는 메서드 (POST 요청)
    public Comment registComment(Comment comment, Long m_id, Long q_id) {
        // 유효한 댓글인지 확인
        injectMember(comment, m_id);
        injectQuestion(comment, q_id);
        return commentRepository.save(comment);
    }

    private void injectQuestion(Comment comment, Long q_id) {
        comment.setQuestion(questionService.findQuestion(q_id));
    }

    private void injectMember(Comment comment, Long m_id) {
        comment.setMember(memberService.findMember(m_id));
    }

    // Comment 수정 및 삭제 권한이 있는 지 없는 지 확인
    public void hasPermissionToModify(Comment comment) {
        Member findMember = memberService.findMember(comment.getMember().getM_id());
        List<Comment> comments = findMember.getComments();

        boolean hasAccessAuthComment = false;
        for(Comment c : comments){
            if(comment.getC_id() == c.getC_id()){
                hasAccessAuthComment = true;
                break;
            }
        }
//        게시물을 읽기, 수정, 삭제 권한이 없다면 예외처리
        if(!hasAccessAuthComment){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_HAVE_AUTHORIZATION);
        }
    }

    // Comment 레포지토리에 등록된 댓글을 수정하는 메서드 (PATCH 요청)
    public Comment updateComment(Comment comment, Long m_id, Long q_id) {
        Comment findComment = findCommentById(comment.getC_id());
        // 존재하는 댓글인지 확인
        checkExistComment(findComment);
        injectQuestion(comment,q_id);
        injectMember(comment,m_id);
        // 수정 권한이 있는 멤버인지 확인
        Member requestMember = memberService.findMember(comment.getMember().getM_id());
        hasPermissionToModify(comment);

        // comment Update
        findComment.setC_comment(comment.getC_comment());
        return commentRepository.save(findComment);
    }
    // Comment Status 값을 DELETE 로 바꾼다
    public void deleteComment(long c_id, long m_id, long q_id) {
        Comment findComment = findCommentById(c_id);
        // 존재하는 댓글인지 확인
        checkExistComment(findComment);
        // 삭제 권한이 있는 멤버인지 확인
//        hasPermissionToModify(findComment);
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
