package com.codestates.answer.entity;

import com.codestates.audit.Auditable;
import com.codestates.member.entity.Member;
import com.codestates.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long a_id;

    @Column(nullable = false)
    private String a_content;

    @ManyToOne // 하나의 질문에는 여러개의 답변을 할 수 있다.
    @JoinColumn(name = "q_id")
    private Question question;

    @ManyToOne // 한명의 멤버는 하나의 게시글에 여러개의 답변을 할 수 있다.
    @JoinColumn(name = "m_id")
    private Member member;

    @Enumerated(EnumType.STRING)
    @Column(length = 10, nullable = false)
    private Accepted accepted = Accepted.FALSE; // 기본값 : 채택되지 않았다.

    @Enumerated(EnumType.STRING)
    @Column(length = 30, nullable = false)
    private AnswerStatus a_status = AnswerStatus.ANSWER_REGISTRATION;

    public enum Accepted{
        TRUE,
        FALSE;
    }

    public enum AnswerStatus{
        ANSWER_REGISTRATION,
        ANSWER_DELETE;
    }

}

