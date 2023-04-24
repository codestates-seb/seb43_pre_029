package com.codestates.comment.entity;

import com.codestates.audit.Auditable;
import com.codestates.exception.BusinessLogicException;
import com.codestates.exception.ExceptionCode;
import com.codestates.member.entity.Member;
import com.codestates.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Comment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long c_id;

    @Column
    private String c_comment;

    @ManyToOne
    @JoinColumn(name = "M_ID")
    private Member member;

    // Question 구현 후 활성화
    @ManyToOne
    @JoinColumn(name = "Q_ID")
    private Question question;

    @Enumerated(value = EnumType.STRING)
    @Column
    private CommentStatus c_status = CommentStatus.COMMENT_REGISTRATION;

    public void checkCommentAuthority(Member AuthenticatedMember) {
        if(member != AuthenticatedMember)
            throw new BusinessLogicException(ExceptionCode.MEMBER_NO_HAVE_AUTHORIZATION);
    }

    public void setMember (Member member){
        this.member = member;
        if(!member.getComments().contains(this)){
            member.getComments().add(this);
        }
    }

    public void setQuestion (Question question){
        this.question = question;
        if(!question.getComments().contains(this)){
            question.getComments().add(this);
        }
    }

    public enum CommentStatus{
        COMMENT_REGISTRATION,
        COMMENT_DELETE
    }
}
