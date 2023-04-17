import React from 'react';
import styled from 'styled-components';
import stackOverflow from '../image/StackOverflow.png';

import { RxHamburgerMenu } from 'react-icons/rx';
import { SlMagnifier } from 'react-icons/sl';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 32px;
  background-color: rgb(248, 249, 249);
  border-top: 3px solid rgb(244, 130, 36);
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  color: rgb(0, 0, 0);
  font-size: 17px;
  font-weight: bold;
  text-decoration: none;
  /* width: 200px; */
  margin: 0 4px 0 10px;
`;

const LogoImg = styled.img`
  height: 42px;
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 8px;
  }
`;

const MenuButton = styled.button`
  border: none;
  background: none;
  font-size: 13.5px;
  color: rgb(110, 113, 115);
  padding: 13px;
  cursor: pointer;

  &:hover {
    /* border: 1px solid black; */
    padding: 6px 13px;
    border-radius: 50px / 60px;
    color: rgb(0, 0, 0);
    background-color: rgb(227, 230, 232);
  }

`;


const SearchInputWrapper = styled.div`
  display: flex;
  border: 1px solid rgb(186, 191, 196);
  border-radius: 4px;
  background-color: #fff;
  padding: 0 10px;
  margin: 0 8px 0 10px;

  &:focus-within {
    border: 1px solid rgb(156, 209, 250);
    box-shadow: 0 0 0 4px rgb(215, 229, 243);
  }
`;

const IconStyle = styled.span`
  display: flex;
  align-items: center;
`

const Icon = styled(SlMagnifier)`
  margin-right: 3px;
`

const SearchInput = styled.input`
  height: 23px;
  width: 600px;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: #fff;
  font-size: 13px;

  &:focus {
    outline: none;
  }
`;



const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
`

const LoginButton = styled.button`
  padding: 7px 11px;
  background-color: rgb(224, 236, 244);
  color: rgb(69, 123, 162);
  font-size: 13px;
  border-radius: 4px;
  border: 1px solid rgb(121, 167, 199);
  cursor: pointer;
  
  &:hover {
    background-color: rgb(179, 211, 234);
    color: rgb(44, 88, 119);
  }
`

const SignupButton = styled.button`
  padding: 7px 11px;
  background-color: rgb(9, 149, 255);
  color: rgb(255, 255, 255);
  font-size: 13px;
  border-radius: 4px;
  border: 1px solid rgb(9, 149, 255);
  cursor: pointer;
  
  &:hover {
    background-color: rgb(0, 116, 204);
    color: #FFF;
  }
`






function Header() {
  return (
    <HeaderContainer>
      <RxHamburgerMenu size={19} />
      <Logo href="#">
        <LogoImg src={stackOverflow} alt="Main Logo" />
        Stack Overflow
      </Logo>
      <HeaderMenu>
        <MenuButton>About</MenuButton>
        <MenuButton>Products</MenuButton>
        <MenuButton>For Teams</MenuButton>
      </HeaderMenu>
      <form>
        <SearchInputWrapper>
          <IconStyle>
          <Icon size={16} />
          </IconStyle>
          <SearchInput type="text" placeholder="Search..." />
        </SearchInputWrapper>
      </form>
      <ButtonWrapper>
      <LoginButton>Log in</LoginButton>
      <SignupButton>Sign up</SignupButton>
      </ButtonWrapper>
    </HeaderContainer>
  );
}

export default Header;
