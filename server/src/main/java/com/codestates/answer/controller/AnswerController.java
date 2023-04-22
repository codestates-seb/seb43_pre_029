package com.codestates.answer.controller;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.mapper.AnswerMapper;
import com.codestates.answer.service.AnswerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answer")
@Validated
@Slf4j
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerMapper mapper;
    private final AnswerService answerService;
    //public final static String QNA_ANSWER_DEFAULT_URL = "/qna-answers";


    // answer 등록
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto AnswerDtoPostDto){
        Answer answer = answerService.createAnswer(mapper.answerDtoToAnswer(AnswerDtoPostDto));
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(answer), HttpStatus.CREATED);
    }

    // answer 수정
    @PatchMapping("/edit/{a_id}")
    public ResponseEntity patchQnaForum(@PathVariable("a_id") @Positive Long a_id,
                                        @Valid @RequestBody AnswerDto answerPatchDto){
        Answer answer = answerService.updateAnswer(mapper.answerDtoToAnswer(answerPatchDto));
        return new ResponseEntity<>(mapper.answerToAnswerResponseDto(answer), HttpStatus.OK);
    }

    // answer 삭제
    @DeleteMapping
    public ResponseEntity deleteAnswer(@Valid @RequestBody AnswerDto answerDeleteDto){
        Answer answer = mapper.answerDtoToAnswer(answerDeleteDto);
        answerService.deleteAnswer(answer);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
