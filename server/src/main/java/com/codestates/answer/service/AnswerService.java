package com.codestates.answer.service;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.codestates.member.service.MemberService;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberService memberService;


    // Answer 등록
    public Answer createAnswer(Answer answer){
        return null;
    }

    // Answer 수정
    public Answer updateAnswer(Answer answer){
        return null;
    }

    // Answer 삭제
    public void verifyDeleted(Answer answer){
    }

}
