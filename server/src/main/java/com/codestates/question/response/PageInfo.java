package com.codestates.question.response;


import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PageInfo {
    private Integer page;
    private Integer size; // 한 페이지당 사이즈가 몇인지
    private Long totalElements; // 총 객체수
    private Integer totalPages; // 총 몇페이지
}