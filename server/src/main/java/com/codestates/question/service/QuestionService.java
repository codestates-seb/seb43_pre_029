package com.codestates.question.service;

import com.codestates.answer.entity.Answer;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.service.MemberService;
import com.codestates.question.entity.Question;
import com.codestates.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import org.springframework.data.domain.PageRequest;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;




@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final QuestionManager questionManager;
    private final MemberService memberService;



    // Question 등록
    public Question createQuestion(Question question){
        injectMember(question);
        return saveQuestion(question);
    }
    // 진짜 멤버를 주입하는 메서드 (성영)
    private void injectMember(Question question) {
        question.setMember(memberService.findMember(question.getMember().getM_id()));
    }

    // repository에 Question 저장
    public Question saveQuestion(Question question){
        return questionRepository.save(question);
    }

    // Question 수정
    public Question updateQuestion(Question question){
        questionManager.verifyDeleted(question);
        Question findQuestion = questionManager.verifiedQuestion(question.getQ_id());
        Question updatedQuestion = questionManager.questionUpdater(findQuestion, question);
        return saveQuestion(updatedQuestion);
    }


    // Question 숨김(삭제)
    public void deleteQuestion(Question question){
        Question findQuestion = questionManager.verifiedQuestion(question.getQ_id());
        questionManager.hasPermissionToModify(question);
        Question deletedQuestion = questionManager.deleteStatusQuestion(findQuestion);
        Question deletedAnswerCommentList = questionManager.deleteQuestionAndRelatedAnswersAndComments(deletedQuestion);
        saveQuestion(deletedAnswerCommentList);
    }




    // 1건의 Question 조회 (question, answer, comment포함)
    @Transactional(readOnly = true)
    public Question findQuestion(Long q_id){
        Question findQuestion = questionManager.verifiedQuestion(q_id);
        questionManager.verifyDeleted(findQuestion);
        return findQuestion;
    }

    // 전체 게시글 조회, 페이지 네이션 구현
    public Page<Question> findQuestions(Long page) {
        int pageNumber = page.intValue();
        Sort.Direction direction = Sort.Direction.DESC;
        String property = "createdAt";
        if (pageNumber < 0){
            throw new IllegalArgumentException("페이지 번호는 음수일 수 없습니다.");
        }

        if(direction == null || property == null){
            throw new IllegalArgumentException("정렬 속성 및 방향은 null 일 수 없습니다.");
        }
        return questionRepository.findAll(PageRequest.of(pageNumber, 5, Sort.by(direction, property)));
    }


    // Answer 채택
    public Question acceptAnswer(Question question, Long a_id) {
        questionManager.hasPermissionToModify(question);
        Question findQuestion = questionManager.verifiedQuestion(question.getQ_id());

        // 답변채택 취소 시 -> questionstatus.question_Answered -> question_registration으로 변경
        if(rejectAcceptedAnswers(findQuestion.getAnswers(),a_id)){
            findQuestion.setQ_status(Question.QuestionStatus.QUESTION_REGISTRATION);
            saveQuestion(findQuestion);
        } else {
            acceptAnswers(findQuestion.getAnswers(), a_id);
            markQuestionAsAnswered(findQuestion);
            saveQuestion(findQuestion);
        }
        return findQuestion;
    }

    // 답변채택 취소: a_id값의 accepted값가 True라면 false로 변경
    public boolean rejectAcceptedAnswers(List<Answer> answers, Long a_id){
        boolean twoCheckAnswer = false;
        for(Answer answer : answers) {
            if (answer.getA_id() == a_id) {
                if (answer.getAccepted() == true) {
                    answer.setAccepted(false);
                    twoCheckAnswer = true;
                }
            }
        }
        return twoCheckAnswer;
    }

    // q_status 답변완료상태 변경
    private void markQuestionAsAnswered(Question question) {
        question.setQ_status(Question.QuestionStatus.QUESTION_ANSWERED);
    }

    // 답변을 채택한다: 하나의 게시글은 하나의 답변만 채택할 수 있다.
    private void acceptAnswers(List<Answer> answers, Long a_id) {
        boolean isFindAnswer = false;
        for (Answer answer : answers) { // 이미 다른답변이 있다면 해당 답변을 취소
            if(answer.getAccepted()){
                if(answer.getA_id() == a_id){
                    answer.setAccepted(isFindAnswer);
                    isFindAnswer = true;
                    break;
                }
                answer.setAccepted(false);
            }
            if(answer.getA_id() == a_id){ // 선택한 답변을 채택
                answer.setAccepted(true);
                isFindAnswer = true;
                continue;
            }
        }
        if(!isFindAnswer){
            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);   // 잘못된 answer 요청을 알리는 Exception
        }
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
    public void increaseLikes(Question question, Long m_id) {
        //TODO 회원은 하나의 게시글에 한번의 추천밖에 할 수 없다. 로직 추가해야함
        question.setSuggestedCount(question.getSuggestedCount()+1);
        saveQuestion(question);
    }

// 검색기능 구현
    public List<Question> searchQuestions(Long page, String keyword) {
        int pageNumber = page.intValue();
        Sort.Direction direction = Sort.Direction.DESC;
        String property = "createdAt";

        if (pageNumber < 0){
            throw new IllegalArgumentException("페이지 번호는 음수일 수 없습니다.");
        }

        if(direction == null || property == null){
            throw new IllegalArgumentException("정렬 속성 및 방향은 null 일 수 없습니다.");
        }
        Page<Question> pageQuestions = questionRepository.findAll(PageRequest.of(pageNumber, 5, Sort.by(direction, property))); //fixme 애초에 db에서 데이터를 추출할 수 없는지. 중복코드 제거요망
        List<Question> filteredQuestions = pageQuestions.getContent();
        List<Question> resultQuestions = new ArrayList<>();
        for(Question question : filteredQuestions){
            if(question.getQ_title().contains(keyword)|| question.getQ_content().contains(keyword)){
                resultQuestions.add(question);
            }
        }
        return removeDuplicateQuestions(resultQuestions);
    }

    // List내 중복요소 제거
    public List<Question> removeDuplicateQuestions(List<Question> questions) {
        Set<String> titleSet = new HashSet<>();
        List<Question> uniqueQuestions = new ArrayList<>();
        for (Question q : questions) {
            if (!titleSet.contains(q.getQ_title())) {
                titleSet.add(q.getQ_title());
                uniqueQuestions.add(q);
            }
        }
        return uniqueQuestions;
    }

    // 검색기능의 페이지 네이션
    public Page<Question> convertToPage(List<Question> questions, Long pageNumber, int pageSize) {
        int start = (int)(pageNumber - 1) * pageSize;
        int end = Math.min(start + pageSize, questions.size());
        return new PageImpl<>(questions.subList(start, end), PageRequest.of((int)(pageNumber - 1), pageSize), questions.size());
    }
}

