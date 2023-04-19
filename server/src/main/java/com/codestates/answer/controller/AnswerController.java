package com.codestates.answer.controller;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.mapper.AnswerMapper;
import com.codestates.answer.service.AnswerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answer")
@Validated
@Slf4j
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;


    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post AnswerDtoPostDto){
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(AnswerDtoPostDto));
        return new ResponseEntity<>(mapper.answerToAnswerSingleResponseDto(answer), HttpStatus.CREATED);
    }

    @PatchMapping("/edit")
    public ResponseEntity patchQnaForum(@PathVariable("answer-id") @Positive Long answerId, // TODO path variable에서 추출되는(extract)를 사용하세요.-> PatchDto에서 보드아이디를 지워도 됨
                                        @Valid @RequestBody AnswerDto.Patch answerPatchDto){
        // Dto를 mapper로 바꿔서 service로직에서 UpdateBoard()를 실행
        Answer answer = mapper.answerPatchDtoToAnswer(answerPatchDto);
        Answer patchAnswer = answerService.updateAnswer(answer);
        return new ResponseEntity<>(mapper.answerToAnswerSingleResponseDto(patchAnswer), HttpStatus.OK);
    }
}
