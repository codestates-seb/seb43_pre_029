package com.codestates.question.service;

import com.codestates.member.service.MemberService;
import com.codestates.question.entity.Question;
import com.codestates.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
        Question deletedQuestion = questionManager.deleteStatusQuestion(findQuestion);
        questionRepository.save(deletedQuestion);
    }

    // 1건의 Question 조회 (question, answer, comment포함)
    @Transactional(readOnly = true)
    public Question findQuestion(Long q_id, Long m_id){
        Question findQuestion = questionManager.verifiedQuestion(q_id);
       // Member member = memberService.findMember(m_id);
        questionManager.verifyDeleted(findQuestion);
        return findQuestion;
    }

    // Answer 채택
//    public void acceptAnswer(Question question){
//        Question findQuestion = questionRepository.findById(question.getQ_id());
//        Answer acceptedAnswer = answerRepository.findById(question.getAnswers().)
//    }


}
