import React from 'react';
import styled from 'styled-components';
import MainLogo from '../../images/stack-overflow-logo-vector.svg';
import FixSidebar from '../../sidebar/FixSideBar';

import { SlMagnifier } from 'react-icons/sl';

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
  padding: 0 1.25rem;
`;

// 네비 버튼
const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 0.1875rem 0.5rem 0 0;
`;

const MenuButton = styled.a`
  text-decoration: none;
  font-size: 0.8125rem;
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

const Icon2 = styled(SlMagnifier)`
  size: 1rem;
  color: rgb(117, 117, 117);
`;
// 검색 인풋
const SearchInput = styled.input`
  height: 1.375rem;
  width: 37.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #fff;
  font-size: 0.8125rem;

  &:focus {
    outline: none;
  }
`;

// 로그인 + 회원가입 버튼
const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const LoginButton = styled.button`
  padding: 0.4375rem 0.6875rem;
  background-color: rgb(224, 236, 244);
  color: rgb(69, 123, 162);
  font-size: 0.8125rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid rgb(121, 167, 199);
  cursor: pointer;

  &:hover {
    background-color: rgb(179, 211, 234);
    color: rgb(44, 88, 119);
  }
  a {
    color: rgb(69, 123, 162);
  }
`;

const SignupButton = styled.button`
  padding: 0.4375rem 0.625rem;
  background-color: rgba(9, 148, 255, 0.824);
  color: rgb(255, 255, 255);
  font-size: 0.8125rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid rgb(9, 149, 255);
  cursor: pointer;

  &:hover {
    background-color: rgb(0, 116, 204);
    color: #fff;
  }
`;

function FixSideHeader() {
  return (
    <>
      <HeaderContainer>
        <Logo href="#">
          <LogoImg src={MainLogo} alt="Main Logo" />
        </Logo>
        <HeaderMenu>
          <MenuButton href="#">About</MenuButton>
          <MenuButton href="#">Products</MenuButton>
          <MenuButton href="#">For Teams</MenuButton>
        </HeaderMenu>
        <form>
          <SearchInputWrapper>
            <IconStyle>
              <Icon2 />
            </IconStyle>
            <SearchInput type="text" placeholder="Search..." />
          </SearchInputWrapper>
        </form>
        <ButtonWrapper>
          <LoginButton>Log in</LoginButton>
          <SignupButton>Sign up</SignupButton>
        </ButtonWrapper>
      </HeaderContainer>
      <FixSidebar />
    </>
  );
}

export default FixSideHeader;
