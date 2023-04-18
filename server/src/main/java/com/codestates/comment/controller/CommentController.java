package com.codestates.comment.controller;

import com.codestates.comment.dto.CommentDto;
import com.codestates.comment.mapper.CommentMapper;
import com.codestates.comment.service.CommentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@Validated
@RequestMapping("/comment")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService){
        this.commentService = commentService;
    }

    @PostMapping
    public ResponseEntity postComment(){
        return new ResponseEntity(new CommentDto(), HttpStatus.CREATED);
    }

    @PatchMapping("/edit")
    public ResponseEntity editComment(){
        return new ResponseEntity(new CommentDto(), HttpStatus.OK);
    }

    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(){
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
