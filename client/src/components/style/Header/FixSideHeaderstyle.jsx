import styled from 'styled-components';
import { SlMagnifier } from 'react-icons/sl';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 2.8rem;
  /* height: 5.3vw; */
  max-width: 100%;
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
  /* height: max(8rem, 12vw); */

  padding: 0 1.25rem;
  /* padding-left: max(0rem, 1vw);
  padding-right: max(0rem, 0.6vw); */
`;

// 네비 버튼
const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 0.1875rem 0.5rem 0 0;
  /* margin: 0.1875rem max(1vw) 0 0; */
`;

const MenuButton = styled.a`
  text-decoration: none;
  font-size: 0.8125rem;
  /* font-size: min(0.2rem, 1vw); */
  color: rgb(82, 82, 82);
  font-weight: 500;
  padding: 0.3125rem 0.625rem;
  /* padding: 0.3125rem 1.3vw; */
  margin: 0 0.375rem;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    border-radius: 3.125rem / 3.125rem;
    color: rgb(0, 0, 0);
    background-color: rgba(227, 230, 232, 0.61);
  }
`;

// 돋보기 + 검색 인풋
// const SearchForm = styled.div`
const SearchContainerStyle = styled.div`
  flex-shrink: 10000;
  flex-grow: 1;
  max-width: 45%;
`;

// const SearchInputWrapper = styled.div`
const SearchInputForm = styled.form`
  display: flex;
  flex-grow: 1;
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
  /* width: max(1rem, 1.2vw); */
  color: rgb(117, 117, 117);
`;

// 검색 인풋
const SearchInput = styled.input`
  height: 1.375rem;
  width: 100%;
  /* width: 35vw; */
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
  /* width: 12vw;
  height: 2rem; */
`;

const LoginButton = styled.button`
  padding: 0.4375rem 0.6875rem;
  /* width: 6vw; */
  /* padding: 0.4375rem 1vw; */
  background-color: rgb(224, 236, 244);
  color: rgb(69, 123, 162);
  font-size: 0.8125rem;
  /* font-size: 1vw; */
  border-radius: 0.25rem;
  border: 0.0625rem solid rgb(121, 167, 199);
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: rgb(179, 211, 234);
    color: rgb(44, 88, 119);
  }
  a {
    color: rgb(69, 123, 162);
  }

  p {
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
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: rgb(0, 116, 204);
    color: #fff;
  }
  a {
    color: rgb(255, 255, 255);
  }
`;

export { HeaderContainer };
export { Logo, LogoImg };
export { HeaderMenu, MenuButton };
export { SearchContainerStyle, SearchInputForm, IconStyle, Icon2, SearchInput };
export { ButtonWrapper, LoginButton, SignupButton };
