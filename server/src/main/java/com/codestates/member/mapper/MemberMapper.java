package com.codestates.member.mapper;

import java.util.List;
import com.codestates.member.dto.MemberDto;
import com.codestates.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member MemberPostDtoToMember(MemberDto.Post memberPostDto);
    Member MemberPatchDtoToMember(MemberDto.Patch memberPatchDto);
    MemberDto.MemberResponse MemberToMemberResponseDto(Member member);
    default MemberDto.MemberGetResponse MemberToMemberGetResponse(Member member){
        MemberDto.MemberGetResponse response = new MemberDto.MemberGetResponse();
        response.setAddress(member.getEmail());
        response.setName(member.getName());
        response.setAddress(member.getAddress());
        response.setStatus_message(member.getStatus_message());

        Long questionCount = Long.valueOf(member.getQuestions().size());
        Long answerCount = Long.valueOf(member.getAnswers().size());
        Long commentCount = Long.valueOf(member.getComments().size());
        response.setActivityCount(questionCount + answerCount + commentCount);
        response.setCommentCount(commentCount);
        response.setAnswerCount(answerCount);
        response.setQuestionCount(questionCount);

        return response;
    };
}
