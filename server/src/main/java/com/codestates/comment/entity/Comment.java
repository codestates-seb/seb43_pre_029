package com.codestates.comment.entity;

import com.codestates.audit.Auditable;
import com.codestates.member.entity.Member;
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

//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member creator;

    // Question 구현 후 활성화
//    @ManyToOne
//    @JoinColumn(name = "QUESTION_ID")
//    private Question queston;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private CommentStatus c_status = CommentStatus.COMMENT_ACTIVE;

    public enum CommentStatus{
        COMMENT_ACTIVE,
        COMMENT_WITHDRAWN
    }
}
