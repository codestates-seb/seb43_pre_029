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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
