package com.codestates.answer.mapper;

import com.codestates.answer.dto.AnswerDto.Patch;
import com.codestates.answer.dto.AnswerDto.Post;
import com.codestates.answer.entity.Answer;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-21T16:36:14+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(Post answerPostDto) {
        if ( answerPostDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        return answer;
    }

    @Override
    public Answer answerPatchDtoToAnswer(Patch answerPatchDto) {
        if ( answerPatchDto == null ) {
            return null;
        }

        Answer answer = new Answer();

        return answer;
    }
}
