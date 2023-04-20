package com.codestates.question.service;

import com.codestates.answer.entity.Answer;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
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
    private final QuestionManager questionManager;

    // Question 등록
    public Question createQuestion(Question question){
        //TODO 로그인된 회원인지 확인하는 로직
        return saveQuestion(question);
    }

    // repository에 Question 저장
    public Question saveQuestion(Question question){
        return questionRepository.save(question);
    }

    // Question 수정
    public Question updateQuestion(Question question){
        Question updatedQuestion = questionManager.questionUpdater(question);
        return saveQuestion(updatedQuestion);
    }

    // Question 숨김(삭제)
    public void deleteQuestion(Question question){
        Question findQuestion = questionManager.verifiedQuestion(question.getQ_id());
        Question deletedQuestion = questionManager.deleteQuestion(findQuestion);
        questionRepository.save(deletedQuestion);
    }

    // Answer 채택
    public void selectAnswer(Question question){
        Question findQuestion = questionRepository.findById(question.getQ_id());
        Answer acceptedAnswer = answerRepository.findById(question.getAnswers().)
    }
}
