package com.codestates.question.controller;

import com.codestates.member.service.MemberService;
import com.codestates.question.dto.QuestionDto;
import com.codestates.question.entity.Question;
import com.codestates.question.mapper.QuestionMapper;
import com.codestates.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/question")
@Validated
@Slf4j
@RequiredArgsConstructor
public class QuestionController {
    private final QuestionMapper mapper;
    private final QuestionService questionService;
    private final MemberService memberService;

    @PostMapping("/ask")
    public ResponseEntity postQustion(@Valid @RequestBody QuestionDto.Post questionPostDto){
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        return new ResponseEntity<>(mapper.questionToQuestionSingleResponseDto(question), HttpStatus.CREATED);
    }

    @PatchMapping("edit")
    public ResponseEntity patchQustion(@Valid @RequestBody QuestionDto.Patch questionPatchDto){
        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));
        return new ResponseEntity<>(mapper.questionToQuestionSingleResponseDto(question), HttpStatus.OK);
    }
}
