package com.codestates.member.entity;


import com.codestates.answer.entity.Answer;
import com.codestates.audit.Auditable;
import com.codestates.comment.entity.Comment;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long m_id;
    @Column
    private String name;
    @Column
    private String password;
    @Column(unique = true)
    private String email;
    @Column
    private String address;
    @Column
    private String status_message = "none";
    @Column(length = 13)
    private String phone;

    @Enumerated(value = EnumType.STRING)
    @Column
    private MemberStatus m_status = MemberStatus.MEMBER_REGISTRATION;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    // Question, Comment, Answer 생성 후

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Answer> answers = new ArrayList<>();
    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Question> questions = new ArrayList<>();
    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Comment> comments = new ArrayList<>();

    public void setAnswers(Answer answer){
        this.answers.add(answer);
        if(answer.getMember() != this)
            answer.setMember(this);
    }
    public void setQuestions(Question question){
        this.questions.add(question);
        if(question.getMember() != this)
            question.setMember(this);
    }
    public void setComments(Comment comment){
        this.comments.add(comment);
        if(comment.getMember() != this)
            comment.setMember(this);
    }

    public enum MemberStatus{
        MEMBER_REGISTRATION,
        MEMBER_DELETE
    }

    // 이미 존재하는 멤버가 있는지 확인
    public static void checkExistMember(Member member){
        if(member != null)
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public void checkActiveMember(Member member){
        if(this.getM_status() == MemberStatus.MEMBER_DELETE)
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
    }

    // 도메인 규칙 검증 메서드

    // 이 멤버가 작성자 m_id 와 일치하는가 검별
    public void checkIsMine(long authenticatedMemberId) {
        if (this.m_id != authenticatedMemberId) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_HAVE_AUTHORIZATION);
        }
    }

    // 요청 m_id 가 자신의 것이 맞는지 확인
    public boolean isMyself(long authenticatedMemberId) {
        return this.m_id == authenticatedMemberId;
    }
}
