package com.codestates.search.entity;

import com.codestates.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@NoArgsConstructor
@Getter
@Setter
public class Search {
    List<Question> questions = new ArrayList<>();
}
