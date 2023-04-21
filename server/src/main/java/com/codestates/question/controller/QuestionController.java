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
    // public final static String QNA_QUESTION_DEFAULT_URL = "/questions";
    private final QuestionMapper mapper;
    private final QuestionService questionService;
    private final MemberService memberService;

    @PostMapping("/ask")
    public ResponseEntity postQustion(@Valid @RequestBody QuestionDto.Post questionPostDto){
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(question), HttpStatus.CREATED);
    }

    @PatchMapping("/edit")
    public ResponseEntity patchQustion(@Valid @RequestBody QuestionDto.Patch questionPatchDto){
        // JwtParseInterceptor에서 extract한 memberId를 얻는다.
        // Long m_id = JwtParseInterceptor.getAuthenticatedMemberId();

        Question question = questionService.updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto));
        return new ResponseEntity<>(mapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteQustion(@Valid @RequestBody QuestionDto.Delete questionDeleteDto){
        //TODO 토큰 값으로 회원인지 확인해야함 일단 Dto로 구현
        Question question = mapper.questiondeleteDtoToQuestion(questionDeleteDto);
        questionService.deleteQuestion(question);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // 전체 게시글 조회
    @GetMapping("/some-page/{q_id}")
    public ResponseEntity getQuestion(@RequestParam ("q_id") Long q_id){
        //Long m_id = JwtParseInterceptor.getAuthenticatedMemberId();
//        Question question = questionService.findQuestion(q_id,m_id);
//        return ResponseEntity<>(mapper.questionToQuestionResponseDto(question));
        return null;
    }

}
