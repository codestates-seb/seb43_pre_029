package com.codestates.question.service;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.member.entity.Member;
import com.codestates.member.service.MemberService;
import com.codestates.question.entity.Question;
import com.codestates.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionManager questionManager;
    private final AnswerRepository answerRepository;

    // Question 등록
    public Question createQuestion(Question question){
        //TODO 토큰값을 가지고 있는 회원인지 확인
        return saveQuestion(question);
    }

    // repository에 Question 저장
    public Question saveQuestion(Question question){
        return questionRepository.save(question);
    }

    // Question 수정
    public Question updateQuestion(Question question){
        Question findQuestion = questionManager.verifiedQuestion(question.getQ_id());
        Question updatedQuestion = questionManager.questionUpdater(findQuestion);
        return saveQuestion(updatedQuestion);
    }


    // Question 숨김(삭제)
    public void deleteQuestion(Question question){
        Question findQuestion = questionManager.verifiedQuestion(question.getQ_id());
        questionManager.checkNotExistQuestion(findQuestion);
        Question deletedQuestion = questionManager.deleteStatusQuestion(findQuestion);
        questionRepository.save(deletedQuestion);
    }

    // 1건의 Question 조회 (question, answer, comment포함)
    @Transactional(readOnly = true)
    public Question findQuestion(Long q_id){
        Question findQuestion = questionManager.verifiedQuestion(q_id);
        //Member member = findQuestion.getMember();
        questionManager.verifyDeleted(findQuestion);
        return findQuestion;
    }

    // 전체 게시글 조회, 페이지 네이션 구현
    public Page<Question> findQuestions(Long page) {
        int pageNumber = page.intValue();
        if (pageNumber < 0){
            throw new IllegalArgumentException("페이지 번호는 음수일 수 없습니다.");
        }
        Sort.Direction direction = Sort.Direction.DESC;
        String property = "q_id";
        if(direction == null || property == null){
            throw new IllegalArgumentException("정렬 속성 및 방향은 null 일 수 없습니다.");
        }
        //return questionRepository.findAll(PageRequest.of(pageNumber, Sort.by(direction, property)));
        return null;
    }

    // Answer 채택
    public Question acceptAnswer(Question question) {
        questionManager.checkNotExistQuestion(question);
        Question findQuestion = questionManager.verifiedQuestion(question.getQ_id());
        markQuestionAsAnswered(findQuestion);
        acceptAnswers(findQuestion.getAnswers());
        saveQuestion(findQuestion);
        return findQuestion;
    }

    // q_status 답변완료상태 변경
    private void markQuestionAsAnswered(Question question) {
        question.setQ_status(Question.QuestionStatus.QUESTION_ANSWERED);
    }

    // question내 answer List를 순회
    private void acceptAnswers(List<Answer> answers) {
        for (Answer answer : answers) {
            if (isAnswerIdInQuestion(answer)) {
                answer.setAccepted(true);
                answerRepository.save(answer);
            }
        }
    }

    // answer가 해당 question내에 존재하는지
    private boolean isAnswerIdInQuestion(Answer answer) {
        Long answerId = answer.getA_id();
        List<Long> answerIdsInQuestion = getAnswerIdsInQuestion(answer);
        return answerIdsInQuestion.contains(answerId);
    }

    // answer와 관련된 question의 모든 a_id값을 List로 가져옴
    private List<Long> getAnswerIdsInQuestion(Answer answer) {
        return answer.getQuestion().getAnswers().stream()
                .map(Answer::getA_id)
                .collect(Collectors.toList());
    }

    // 조회수 증가
    public void increaseViews(Question question) {
        question.setViewCount(question.getViewCount()+1);
        saveQuestion(question);
    }

    // 게시글 추천 수 증가
    public void increaseLikes(Question question) {
        question.setSuggestedCount(question.getSuggestedCount()+1);
        saveQuestion(question);
    }
}
