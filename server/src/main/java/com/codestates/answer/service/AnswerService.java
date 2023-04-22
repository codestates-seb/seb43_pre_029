package com.codestates.answer.service;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.Answer;
import com.codestates.answer.repository.AnswerRepository;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.question.entity.Question;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.codestates.member.service.MemberService;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;


    // Answer 등록
    public Answer createAnswer(Answer answer){
        return saveAnswer(answer);
    }

    // repository에 Answer 저장
    public Answer saveAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    // Answer 수정
    public Answer updateAnswer(Answer answer){
        Answer findAnswer = verifiedAnswer(answer.getA_id());
        Answer updatedAnswer = answerUpdater(findAnswer);
        return saveAnswer(updatedAnswer);
    }

    // Answer을 업데이트 하는 실제적 로직
    public Answer answerUpdater(Answer findAnswer) {
        checkNotExistAnswer(findAnswer);
        return changerContent(findAnswer);
    }


    // Answer을 수정 및 삭제 권한이 없는 member를 check
    public void checkNotExistAnswer(Answer answer) {
        //TODO answer을 작성한 멤버 id값으로 멤버가 작성한 answer List에서 a_id값이 있는지 확인
//        Member findMember = memberService.메서드명(question.getMember().getMemberId());
//        List<Answer> answers = findMember.getAnswer();
//
//        boolean existQuestion = false;
//        for(Answer a:answers){
//            if(answer.getA_id() == c.getA_id()){
//                existAnswer = true;
//                break;
//            }
//        }
//
//        게시물을 읽기, 수정, 삭제 권한이 없다면 예외처리
//        if(!existAnswer){
//            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_HAVE_AUTHORIZATION);
//        }
    }

    public Answer changerContent(Answer answer) {
        Optional.ofNullable(answer.getA_content())
                .ifPresentOrElse(answer::setA_content, () -> {});
        return answer;
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
        checkNotExistAnswer(findAnswer);
        Answer deletedAnswer = deleteStatusAnswer(findAnswer);
        answerRepository.save(deletedAnswer);
    }

    // Question 숨김(삭제)상태로 변경
    public Answer deleteStatusAnswer(Answer findAnswer) {
        checkNotExistAnswer(findAnswer);
        verifyDeleted(findAnswer);
        findAnswer.setA_status(Answer.AnswerStatus.ANSWER_DELETE);
        return findAnswer;
    }
}
