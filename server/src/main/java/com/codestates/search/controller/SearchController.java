package com.codestates.search.controller;

import com.codestates.member.service.MemberService;
import com.codestates.question.entity.Question;
import com.codestates.question.mapper.QuestionMapper;
import com.codestates.question.repository.QuestionRepository;
import com.codestates.question.response.MultiResponseDto;
import com.codestates.search.service.SearchService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/search")
@Validated
@Slf4j
@RequiredArgsConstructor
public class SearchController {
    private final SearchService searchService;
    private final QuestionMapper mapper;

    @GetMapping
    public ResponseEntity search(@RequestParam("keyword") String keyword,
                                 @RequestParam("page") Long page){
        // keyword에 해당하는 게시글 리스트들만 저장할 수 있는 로직
        Page<Question> findPageQuestions = searchService.searchQuestions(page -1, keyword);
        List<Question> questions = findPageQuestions.getContent();


        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.questionsToQuestionResponseDtos(questions),findPageQuestions)
                ,HttpStatus.OK);
    }
}
