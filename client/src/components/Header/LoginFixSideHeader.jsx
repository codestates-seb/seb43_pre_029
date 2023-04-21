import React from 'react';
import styled from 'styled-components';
import MainLogo from '../../images/stack-overflow-logo-vector.svg';
import FixSidebar from '../../sidebar/FixSideBar';

import { SlMagnifier } from 'react-icons/sl';
import { BsFillInboxFill } from 'react-icons/bs';
import { IoIosTrophy } from 'react-icons/io';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { MdChatBubble } from 'react-icons/md';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(248, 249, 249);
  border-top: 0.1875rem solid rgb(244, 130, 36);
  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.219);
  z-index: 999;
`;

// 메인 로고
const Logo = styled.a`
  padding: 0 0.375rem 0 0.125rem;
`;

const LogoImg = styled.img`
  height: 9.9rem;
`;

// 네비 버튼
const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 0.1875rem 0.5rem 0 0;
`;

const MenuButton = styled.a`
  text-decoration: none;
  font-size: 0.87rem;
  color: rgb(82, 82, 82);
  font-weight: 500;
  padding: 0.3125rem 0.625rem;
  margin: 0 0.375rem;
  cursor: pointer;

  &:hover {
    border-radius: 3.125rem / 3.125rem;
    color: rgb(0, 0, 0);
    background-color: rgba(227, 230, 232, 0.61);
  }
`;

// 돋보기 + 검색 인풋
const SearchInputWrapper = styled.div`
  display: flex;
  border: 0.0625rem solid rgb(186, 191, 196);
  border-radius: 0.25rem;
  background-color: #fff;
  padding: 0 0.625rem;
  margin: 0 0.5rem 0 0.0625rem;

  &:focus-within {
    border: 0.0625rem solid rgb(156, 209, 250);
    box-shadow: 0 0 0 0.25rem rgb(215, 229, 243);
  }
`;

// 돋보기 아이콘
const IconStyle = styled.span`
  display: flex;
  align-items: center;
`;

const Icon1 = styled(SlMagnifier)`
  size: 1rem;
  color: rgb(117, 117, 117);
`;
// 검색 인풋
const SearchInput = styled.input`
  height: 1.375rem;
  width: 44.9rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #fff;
  font-size: 0.8125rem;

  &:focus {
    outline: none;
  }
`;

// 유저 프로필
const ProfileWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  padding: 0.625rem 1.125rem 0.625rem 0;

  &:hover {
    background-color: rgba(227, 230, 232, 0.61);
  }
`;

const Avatar = styled.img`
  width: 1.5625rem;
  height: 1.5625rem;
  border-radius: 20%;
  margin: 0 0 0 0.625rem;
`;

const Num = styled.p`
  color: rgb(82, 88, 96);
  font-weight: 800;
  padding-top: 0.1875rem;
  font-size: 0.8125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 유저 프로필 옆 아이콘 4개
const NavIconStyle = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: rgba(227, 230, 232, 0.61);
  }
`;

const Icon2 = styled(BsFillInboxFill)`
  font-size: 1.3rem;
  color: rgb(82, 88, 96);
  padding: 0.75rem 0.5rem;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const Icon3 = styled(IoIosTrophy)`
  font-size: 1.4rem;
  color: rgb(82, 88, 96);
  padding: 0.7rem 0.5rem;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const Icon4 = styled(BsFillQuestionCircleFill)`
  font-size: 1rem;
  color: rgb(82, 88, 96);
  padding: 0.9rem 0.65rem;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const Icon5 = styled(MdChatBubble)`
  font-size: 1.28rem;
  color: rgb(82, 88, 96);
  padding: 0.79rem 0.55rem;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

function LoginFixSideHeader() {
  return (
    <>
      <HeaderContainer>
        <Logo href="/">
          <LogoImg src={MainLogo} alt="Main Logo" />
        </Logo>
        <HeaderMenu>
          <MenuButton href="#">Products</MenuButton>
        </HeaderMenu>
        <form>
          <SearchInputWrapper>
            <IconStyle>
              <Icon1 />
            </IconStyle>
            <SearchInput type="text" placeholder="Search..." />
          </SearchInputWrapper>
        </form>
        <ProfileWrapper>
          <Avatar
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_1280.png"
            alt="User Avatar"
          />
          <Num>1</Num>
        </ProfileWrapper>
        <NavIconStyle>
          <Icon2 />
        </NavIconStyle>
        <NavIconStyle>
          <Icon3 />
        </NavIconStyle>
        <NavIconStyle>
          <Icon4 />
        </NavIconStyle>
        <NavIconStyle>
          <Icon5 />
        </NavIconStyle>
      </HeaderContainer>
      <FixSidebar />
    </>
  );
}

export default LoginFixSideHeader;
