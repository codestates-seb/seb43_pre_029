package com.codestates.member.entity;


import com.codestates.audit.Auditable;
import com.codestates.comment.entity.Comment;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String address;

    @Column(length = 13, nullable = false, unique = true)
    private String phone;

    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    // Question, Comment, Answer 생성 후

//    @OneToMany(mappedBy = "member")
//    private List<Answer> answers = new ArrayList<>();
//
//    @OneToMany(mappedBy = "member")
//    private List<Question> questions = new ArrayList<>();
////
//    @OneToMany(mappedBy = "member")
//    private List<Comment> comments = new ArrayList<>();

    public enum MemberStatus{
        MEMBER_ACTIVE,
        MEMBER_WITHDRAWN
    }

}
