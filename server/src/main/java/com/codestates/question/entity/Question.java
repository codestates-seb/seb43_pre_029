package com.codestates.question.entity;

import com.codestates.answer.entity.Answer;
import com.codestates.audit.Auditable;
import com.codestates.comment.entity.Comment;
import com.codestates.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long q_id;

    @Column(nullable = false)
    private String q_title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String q_content1;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String q_content2;

    @ManyToOne
    @JoinColumn(name = "m_id")
    private Member member;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private List<Comment> comments = new ArrayList<>();

//    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
//    private List<AnswerComment> a_comments = new ArrayList<>();

    @Column
    private Long suggestedCount = 0L; // 추천수

    @Column
    private Long viewCount = 0L ; // 조회수

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private QuestionStatus q_status = QuestionStatus.QUESTION_REGISTRATION;

    public enum QuestionStatus {
        QUESTION_REGISTRATION, // 질문 등록 상태, 답변대기 상태
        QUESTION_ANSWERED, //답변 채택완료 상태
        QUESTION_DELETE; // 질문 삭제 상태
    }
}
