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
  padding: 0.6rem 0.31rem;
  transform: ${({ open }) => (open ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: transform 1s ease-in-out;
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
  padding: 0.7rem 0.2rem;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const Icon3 = styled(IoIosTrophy)`
  font-size: 1.4rem;
  color: rgb(82, 88, 96);
  padding: 0.65rem 0.2rem;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const Icon4 = styled(BsFillQuestionCircleFill)`
  font-size: 1.125rem;
  color: rgb(82, 88, 96);
  padding: 0.78rem 0.3rem;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const Icon5 = styled(MdChatBubble)`
  font-size: 1.28rem;
  color: rgb(82, 88, 96);
  padding: 0.7rem 0.3rem;

  &:hover {
    color: rgb(0, 0, 0);
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

function LoginModalSideHeader({ isOpen }) {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
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
    </>
  );
}

export default LoginModalSideHeader;
