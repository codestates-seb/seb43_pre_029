package com.codestates.question.repository;

import com.codestates.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Pageable;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    Page<Question> findByTitleContainingOrContentContaining(String q_title, String q_content1, String q_content2, Pageable pageable);
}
