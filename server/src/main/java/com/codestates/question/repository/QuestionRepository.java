package com.codestates.question.repository;

import com.codestates.question.dto.QuestionResponseDto;
import com.codestates.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question,Long> { //fixme
//    @Query("SELECT new com.codestates.question.dto.QuestionResponseDto(q.member.m_id, q.member.name, q.q_id, q.q_title," +
//            "q.q_content1, q.q_content2, q.suggestedCount, q.viewCount, q.answerCount, q.create_at, q.last_modifined_at," +
//            "q.comments, q.answers, q.q_status) " +
//            "FROM Question q " +
//            "WHERE q.q_status <> com.codestates.question.entity.Question.QuestionStatus.QUESTION_DELETE")
//    List<QuestionResponseDto> findQuestionsNotDeleted();
}
