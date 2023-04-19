package com.codestates.member.mapper;


import com.codestates.member.dto.MemberDto;
import com.codestates.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member MemberPostDtoToMember(MemberDto.Post memberPostDto);
    MemberDto.MemberResponse MemberToMemberResponseDto(Member member);
    default MemberDto.MemberGetResponse MemberToMemberGetResponse(Member member){
        MemberDto.MemberGetResponse response = new MemberDto.MemberGetResponse();
        response.setAddress(member.getEmail());
        response.setName(member.getName());
        response.setAddress(member.getAddress());
        response.setStatus_message(member.getStatus_message());
//        response.setActivityCount(member.getActivities().count());
//        response.setCommentCount(member.getComments().count());
//        response.setAnswerCount(member.getAnswers().count());

        return response;
    };
}
