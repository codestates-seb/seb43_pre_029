package com.codestates.answer.service;

import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.codestates.member.service.MemberService;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberService memberService;


    // Answer 등록

    public Answer createAnswer(Answer answer){
//        hasPermissionToModify(answer);
        injectMember(answer);
        return saveAnswer(answer);
    }

    // repository에 Answer 저장
    public Answer saveAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    // Answer 수정
    public Answer updateAnswer(Answer answer){
        hasPermissionToModify(answer);
        verifyDeleted(answer);
        Answer findAnswer = verifiedAnswer(answer.getA_id());
        Answer updatedAnswer = changerContent(findAnswer, answer);
        return saveAnswer(updatedAnswer);
    }

    // memberRepo에 dto로 받아온 member에 set함
    public void injectMember(Answer answer){
        answer.setMember(memberService.findMember(answer.getMember().getM_id()));
    }

    // Answer을 수정 및 삭제 권한이 없는 member를 check
    public void hasPermissionToModify(Answer answer) {
        Member findMember = memberService.findMember(answer.getMember().getM_id());
        List<Answer> answers = findMember.getAnswers();

        boolean existAnswer = false;
        for(Answer a:answers){
            if(answer.getA_id() == a.getA_id()){
                existAnswer = true;
                break;
            }
        }

//        게시물을 읽기, 수정, 삭제 권한이 없다면 예외처리
        if(!existAnswer){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_HAVE_AUTHORIZATION);
        }
    }

// answer content수정
    public Answer changerContent(Answer toAnswer, Answer fromAnswer) {
        Optional.ofNullable(fromAnswer.getA_content())
                .ifPresentOrElse(toAnswer::setA_content, () -> {});
        return toAnswer;
    }

    // DB에 답변이 존재하는지 id값으로 확인
    public Answer verifiedAnswer(Long a_id){
        Optional<Answer> optionalAnswer = answerRepository.findById(a_id);
        Answer findAnswer = optionalAnswer.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    // answer 삭제상태인지 확인
    public void verifyDeleted(Answer findAnswer){
        if(findAnswer.getA_status() == Answer.AnswerStatus.ANSWER_DELETE){
            throw new BusinessLogicException(ExceptionCode.ANSWER_CANNOT_DELETE);
        }
    }

    // Answer 삭제
    public void deleteAnswer(Answer answer) {
        Answer findAnswer = verifiedAnswer(answer.getA_id());
        hasPermissionToModify(answer);
        Answer deletedAnswer = deleteStatusAnswer(findAnswer);
        answerRepository.save(deletedAnswer);
    }

    // Question 숨김(삭제)상태로 변경
    public Answer deleteStatusAnswer(Answer findAnswer) {
        hasPermissionToModify(findAnswer);
        verifyDeleted(findAnswer);
        findAnswer.setA_status(Answer.AnswerStatus.ANSWER_DELETE);
        return findAnswer;
    }
}
