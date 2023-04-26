import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosInformationCircle } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';

import {
  HeaderContainer,
  Logo,
  LogoImg,
  HeaderMenu,
  MenuButton,
  SearchInputWrapper,
  IconStyle,
  Icon2,
  SearchInput,
  ButtonWrapper,
  LoginButton,
  SignupButton,
} from './FixSideHeaderstyle';

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

export { HeaderContainer };
export { HamburgerStyle, Icon1Close, Icon1Open };
export { Logo, LogoImg };
export { HeaderMenu, MenuButton };
export { SearchInputWrapper, IconStyle, Icon2, SearchInput };
export { ButtonWrapper, LoginButton, SignupButton };

export { SidebarWrapper, SidebarMenu, SidebarCategories, InformationIcon };
export { SidebarMenuItem, SideImg, SidebarStarImgWrapper };
