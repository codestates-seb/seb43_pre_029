package com.codestates.question.service;

import com.codestates.answer.entity.Answer;
import com.codestates.comment.entity.Comment;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
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
    public Question questionUpdater(Question toQuestion, Question fromQuestion) {
        hasPermissionToModify(toQuestion);
        return changerContent(toQuestion, fromQuestion);
    }

    public Question changerContent(Question toQuestion, Question fromQuestion) {
        Optional.ofNullable(fromQuestion.getQ_title())
                .ifPresentOrElse(toQuestion::setQ_title, () -> {
                });
        Optional.ofNullable(fromQuestion.getQ_content())
                .ifPresentOrElse(toQuestion::setQ_content, () -> {
                });
        return toQuestion;
    }

    // Question을 수정 및 삭제 권한이 없는 member를 check
    // JWT구현 시 대체
    public void hasPermissionToModify(Question question) {
        //TODO question을 작성한 멤버 id값으로 멤버가 작성한 question List에서 q_id값이 있는지 확인
        Member findMember = memberService.findMember(question.getMember().getM_id());
        List<Question> questions = findMember.getQuestions();

        boolean existQuestion = false;
        for (Question q : questions) {
            if (question.getQ_id() == q.getQ_id()) {
                existQuestion = true;
                break;
            }
        }

//        게시물을 읽기, 수정, 삭제 권한이 없다면 예외처리
        if (!existQuestion) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_HAVE_AUTHORIZATION);
        }
    }

    // DB에 게시글이 존재하는지 id값으로 확인
    public Question verifiedQuestion(Long q_id) {
        Optional<Question> optionalQuestion = questionRepository.findById(q_id);
        Question findQuestion = optionalQuestion.orElseThrow(() ->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }

    // Question 삭제상태인지 확인
    public void verifyDeleted(Question findQuestion) {
        if (findQuestion.getQ_status() == Question.QuestionStatus.QUESTION_DELETE) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_HAS_BEEN_DELETED);
        }
    }

    // Question 숨김(삭제)상태로 변경
    public Question deleteStatusQuestion(Question question) {
        verifyDeleted(question);
        question.setQ_status(Question.QuestionStatus.QUESTION_DELETE);
        return question;
    }

    // Question의 status가 delete일 때 List<Answer>, List<Comment>를 delete상태로 변경
    public Question deleteQuestionAndRelatedAnswersAndComments(Question question) {
        if (question.getQ_status().equals(Question.QuestionStatus.QUESTION_DELETE) && question.getAnswers() != null || question.getAnswers().size() != 0) {
            for (Answer answer : question.getAnswers()) {
                if (answer.getA_status() != Answer.AnswerStatus.ANSWER_DELETE) {
                    answer.setA_status(Answer.AnswerStatus.ANSWER_DELETE);
                }
            }
        }

        if (question.getQ_status().equals(Question.QuestionStatus.QUESTION_DELETE) && question.getComments() != null || question.getComments().size() != 0) {
            for (Comment comment : question.getComments()) {
                if (comment.getC_status() != Comment.CommentStatus.COMMENT_DELETE) {
                    comment.setC_status(Comment.CommentStatus.COMMENT_DELETE);
                }
            }
        }
        return question;
    }
}
