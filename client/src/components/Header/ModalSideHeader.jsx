import React, { useState } from 'react';
import styled from 'styled-components';
import MainLogo from '../../images/stack-overflow-logo-vector.svg';
import ModalSideBarImg from '../../images/ModalSideBarImg.png';
import SidebarStarImg from '../../images/SidebarStarImg.png';

import { RxHamburgerMenu } from 'react-icons/rx';
import { SlMagnifier } from 'react-icons/sl';
import { IoEarthSharp } from 'react-icons/io5';
import { IoIosInformationCircle } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';

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

// 햄버거 사이드 버튼
const HamburgerStyle = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: rgba(227, 230, 232, 0.61);
  }
`;

const Icon1Close = styled(RxHamburgerMenu)`
  font-size: 1.125rem;
  color: rgb(0, 0, 0);
  padding: 0.8rem 0.5rem;
  transform: ${({ open }) => (open ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: transform 1s ease-in-out;
`;

const Icon1Open = styled(IoCloseSharp)`
  font-size: 1.5rem;
  color: rgba(26, 26, 26, 0.683);
  padding: 0.6rem 0.32rem;
  transform: ${({ open }) => (open ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: transform 1s ease-in-out;
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
  background-color: rgb(9, 149, 255);
  color: rgb(255, 255, 255);
  font-size: 0.8125rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid rgb(9, 149, 255);
  cursor: pointer;

  &:hover {
    background-color: rgb(0, 116, 204);
    color: #fff;
  }
  a {
    color: rgb(255, 255, 255);
  }
`;

// 모달
const SidebarWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  position: absolute;
  width: 15rem;
  height: 36.875rem;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: none;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.184);
`;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  & > *:nth-child(n + 4):nth-child(-n + 6) {
    padding: 0.4375rem 0 0.4375rem 1.75rem;
  }

  & > *:nth-child(7) {
    padding: 0 1.25rem 0 0;
  }
`;

const SidebarCategories = styled.p`
  font-size: 0.78125rem;
  margin: 0.875rem 0 0.4rem 0.4375rem;
  color: rgb(103, 103, 103);
  display: flex;
  justify-content: space-between;
`;

const InformationIcon = styled(IoIosInformationCircle)`
  font-size: 1rem;
  color: #737373;
`;

// const ItemHover = styled.div`
//   border: 1px solid black;
//   &:hover {
//     background-color: rgb(241, 242, 243);
//     border-right: 0.1875rem solid rgb(244, 130, 37);
//   }
// `;

// 클릭됐을 때.
// &:hover {
//   color: black;
//   background-color: rgb(241, 242, 243);
//   border-right: 0.1875rem solid rgb(244, 130, 37);
// }

const SidebarMenuItem = styled.button`
  border: none;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 0.625rem;
  padding: 0.4375rem 0 0.4375rem 0.25rem;
  color: rgb(85, 85, 85);
  z-index: 9999;
  background-color: transparent;
  font-size: 0.8125rem;
  cursor: pointer;

  & > svg {
    color: #7e7e7e;
    margin-right: 0.3125rem;
    font-size: 1.125rem;
  }

  &:hover {
    color: rgb(0, 0, 0);
  }
  a {
    color: rgb(85, 85, 85);
  }
`;

const SideImg = styled.img`
  margin: 0.3125rem 0 0 0.3125rem;
  width: 12rem;
`;

const SidebarStarImgWrapper = styled.img`
  height: 1.125rem;
  width: auto;
  margin-right: 0.3125rem;
`;

function ModalSideHeader({ isOpen }) {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <HeaderContainer>
      <div>
        <HamburgerStyle onClick={onToggle} open={open}>
          {open ? <Icon1Open open={open} /> : <Icon1Close open={open} />}
        </HamburgerStyle>
        {open && (
          <SidebarWrapper>
            <SidebarMenu>
              <SidebarMenuItem>
                <a href="/">Home</a>
              </SidebarMenuItem>
              <SidebarCategories>PUBLIC</SidebarCategories>
              <SidebarMenuItem>
                <IoEarthSharp />
                Questions
              </SidebarMenuItem>
              <SidebarMenuItem>Tags</SidebarMenuItem>
              <SidebarMenuItem>Users</SidebarMenuItem>
              <SidebarMenuItem>Companies</SidebarMenuItem>
              <SidebarCategories>
                COLLECTIVES
                <InformationIcon />
              </SidebarCategories>
              <SidebarMenuItem>
                <SidebarStarImgWrapper src={SidebarStarImg} alt="Sidebar Star" />
                Explore Collectives
              </SidebarMenuItem>
              <SidebarCategories>TEAMS</SidebarCategories>
              <SideImg src={ModalSideBarImg} alt="SideBarImg" />
            </SidebarMenu>
          </SidebarWrapper>
        )}
      </div>
      <Logo href="/">
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
        <LoginButton>
          <a href="/login">Log in</a>
        </LoginButton>
        <SignupButton>
          <a href="/signup">Sign up</a>
        </SignupButton>
      </ButtonWrapper>
    </HeaderContainer>
  );
}

export default ModalSideHeader;
