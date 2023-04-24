package com.codestates.search.service;

import com.codestates.member.entity.Member;
import com.codestates.question.entity.Question;
import com.codestates.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SearchService {
    private final QuestionRepository questionRepository;

    public Page<Question> searchQuestions(Long page, String keyword) {
        Pageable pageable = PageRequest.of(page.intValue(), 5, Sort.by("createdAt").descending());
        return questionRepository.findByTitleContainingOrContentContaining(keyword, keyword, keyword, pageable);
    }
}
