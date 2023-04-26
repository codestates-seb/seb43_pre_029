package com.codestates.helper;


import com.codestates.member.entity.Member;
import lombok.Getter;
import org.springframework.context.ApplicationEvent;

@Getter
public class MemberRegistrationApplicationEvent {
	private Member member;
	public MemberRegistrationApplicationEvent(Member member) {
		this.member = member;
	}
}
