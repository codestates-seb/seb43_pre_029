package com.codestates.exception;

import lombok.Getter;
public enum ExceptionCode {
    MEMBER_NOT_FOUND(404,"Member not found"),
    MEMBER_EXISTS(409,"Member exists"),
    MEMBER_NO_HAVE_AUTHORIZATION(401,"Member no have authorization"),
    INVALID_MEMBER_STATUS(400,"Invalid member status"),
    MEMBER_DOES_NOT_MATCH(403,"Member does not match"),
    QUESTION_NOT_FOUND(404,"Question not found"),
    QUESTION_CANNOT_CHANGE(403,"Question can not change"),
    QUESTION_CANNOT_DELETE(403,"Question can not delete"),
    QUESTION_HAS_BEEN_DELETED(403,"Question has been deleted"),
    ANSWER_NOT_FOUND(404,"Answer not found"),
    ANSWER_EXISTS(409, "Answer exists"),
    ANSWER_CANNOT_CHANGE(403,"Answer can not change"),
    ANSWER_CANNOT_DELETE(403,"Answer can not delete"),
    COMMENT_NOT_FOUND(404,"Comment not found"),
    COMMENT_CANNOT_CHANGE(403, "Comment can not change"),
    COMMENT_CANNOT_DELETED(403, "Comment can not deleted"),
    COMMENT_CANNOT_REGISTER(403,"Comment can not register"),
    NOT_IMPLEMENTATION(501,"Not Implementation");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
