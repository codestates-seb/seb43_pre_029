package com.codestates.question.service;

import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
import com.codestates.member.repository.MemberRepository;
import com.codestates.member.service.MemberService;
import com.codestates.question.entity.Question;
import com.codestates.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class QuestionManager {
    private final QuestionRepository questionRepository;
    private final MemberService memberService;

    // Question을 업데이트 하는 실제적 로직
    public Question questionUpdater(Question question) {
        // TODO 게시글을 작성한 멤버id가 데이터베이스에 있는지 확인하는 로직필요
        //memberService.
        Question verifyQuestion = verifiedQuestion(question.getQ_id());
        checkNotExistQuestion(question);
        return changerContent(question);
    }

    public Question changerContent(Question question) {
        Question findQuestion = verifiedQuestion(question.getQ_id());

        Optional.ofNullable(question.getQ_title())
                .ifPresentOrElse(findQuestion::setQ_title, () -> {});
        Optional.ofNullable(question.getQ_content())
                .ifPresentOrElse(findQuestion::setQ_content, () -> {});
        Optional.ofNullable(question.getQ_status())
                .ifPresentOrElse(findQuestion::setQ_status, () -> {});

        return findQuestion;
    }

    // Question을 수정 및 삭제 권한이 없는 member를 check
    public void checkNotExistQuestion(Question question) {
        //TODO question을 작성한 멤버 id값으로 멤버가 작성한 question List에 인자로 들어온 question id값이 있는지 확인
//        Member findMember = memberService.메서드명(question.getMember().getMemberId());
//        List<Question> questionList = findMember.getQuestion();
//
//        boolean existQuestion = false;
//        for(Question q:questionList){
//            if(question.getQ_id() == q.getQ_id()){
//                existQuestion = true;
//                break;
//            }
//        }
//
//        게시물을 수정할 권한이 없다면 예외처리
//        if(!existQuestion){
//            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_HAVE_AUTHORIZATION);
//        }
    }

    // DB에 게시글이 존재하는지 id값으로 확인
    public Question verifiedQuestion(Long q_id) {
        Optional<Question> optionalQuestion = questionRepository.findById(q_id);
        Question findQuestion = optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

    // Question 삭제상태인지 확인
    public void verifyDeleted(Question question){
        if(question.getQ_status() == Question.QuestionStatus.QUESTION_DELETE){
            throw new BusinessLogicException(ExceptionCode.QUESTION_HAS_BEEN_DELETED);
        }
    }

    // Question 숨김(삭제)상태로 변경
    public Question deleteQuestion(Question findQuestion) {
        checkNotExistQuestion(findQuestion);
        verifyDeleted(findQuestion);
        findQuestion.setQ_status(Question.QuestionStatus.QUESTION_DELETE);
        return findQuestion;
    }
}
