package com.codestates.question.response;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private List<T> data; // 1 페이지에 대한 모든 질문이 들어가있는 데이터
    private PageInfo pageInfo; // 페이션네이션 정보 1,2,3,4,5

    public MultiResponseDto(List<T> data, Page page) {
        this.data = data;
        this.pageInfo = new PageInfo(page.getNumber() + 1,
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }
}


