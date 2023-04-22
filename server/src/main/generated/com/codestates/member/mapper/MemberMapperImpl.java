package com.codestates.member.mapper;

import com.codestates.member.dto.MemberDto.MemberResponse;
import com.codestates.member.dto.MemberDto.Patch;
import com.codestates.member.dto.MemberDto.Post;
import com.codestates.member.entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-22T11:14:55+0900",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member MemberPostDtoToMember(Post memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setName( memberPostDto.getName() );
        member.setPassword( memberPostDto.getPassword() );
        member.setEmail( memberPostDto.getEmail() );
        member.setAddress( memberPostDto.getAddress() );
        member.setStatus_message( memberPostDto.getStatus_message() );
        member.setPhone( memberPostDto.getPhone() );

        return member;
    }

    @Override
    public Member MemberPatchDtoToMember(Patch memberPatchDto) {
        if ( memberPatchDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setName( memberPatchDto.getName() );
        member.setPassword( memberPatchDto.getPassword() );
        member.setAddress( memberPatchDto.getAddress() );
        member.setStatus_message( memberPatchDto.getStatus_message() );
        member.setPhone( memberPatchDto.getPhone() );

        return member;
    }

    @Override
    public MemberResponse MemberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberResponse memberResponse = new MemberResponse();

        memberResponse.setEmail( member.getEmail() );
        memberResponse.setName( member.getName() );
        memberResponse.setAddress( member.getAddress() );
        memberResponse.setStatus_message( member.getStatus_message() );
        memberResponse.setPhone( member.getPhone() );

        return memberResponse;
    }
}
