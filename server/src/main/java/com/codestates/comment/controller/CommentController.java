package com.codestates.comment.controller;

import com.codestates.comment.dto.CommentDto;
import com.codestates.comment.entity.Comment;
import com.codestates.comment.mapper.CommentMapper;
import com.codestates.comment.service.CommentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@Slf4j
@Validated
@RequestMapping("/comment")
@Transactional
@CrossOrigin(origins = "*")
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper commentMapper;

    public CommentController(CommentService commentService, CommentMapper commentMapper){
        this.commentService = commentService;
        this.commentMapper = commentMapper;
    }

    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentDto.Post requestBody){
        Comment comment = commentMapper.CommentPostDtoToComment(requestBody);
        Long m_id = requestBody.getM_id();
        Long q_id = requestBody.getQ_id();
        // 스택오버플로 회원인지 확인
        Comment response = commentService.registComment(comment, m_id, q_id);
        return new ResponseEntity(commentMapper.CommentToCommentResponseDto(response), HttpStatus.CREATED);
    }

    @PatchMapping("/edit")
    public ResponseEntity editComment(@Valid @RequestBody CommentDto.Patch requestBody){
        Comment comment = commentMapper.CommentPatchDtoToComment(requestBody);
        Long m_id = requestBody.getM_id();
        Long q_id = requestBody.getQ_id();
        // 스택오버플로 회원인지 확인
        Comment response = commentService.updateComment(comment, m_id, q_id);
        return new ResponseEntity(commentMapper.CommentToCommentResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(@PathVariable("comment-id") long c_id,
                                        @Valid @RequestBody CommentDto.Delete requestBody){
        Long m_id = requestBody.getM_id();
        Long q_id = requestBody.getQ_id();
        // 스택오버플로 회원인지 확인
        commentService.deleteComment(c_id, m_id, q_id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
