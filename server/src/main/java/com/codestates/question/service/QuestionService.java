package com.codestates.question.service;

import com.codestates.answer.entity.Answer;
import com.codestates.member.service.MemberService;
import com.codestates.question.entity.Question;
import com.codestates.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberService memberService;

    // Question 등록
    public Question createQuestion(Question question){
        return null;
    }

    // Question 수정
    public Question updateQuestion(Question question){
        return null;
    }

    // Question 삭제
    public void verifyDeleted(Question question){
    }

}
