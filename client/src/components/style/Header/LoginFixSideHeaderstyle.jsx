import styled from 'styled-components';
import { HeaderContainer, Logo, HeaderMenu, SearchInputForm, IconStyle, Icon2 as Icon1 } from './FixSideHeaderstyle';
import { ProfileWrapper, NavIconStyle, Icon2, Icon3, Icon4, Icon5, Avatar, Num } from './UserProfile';

// 메인 로고
// Logo
const LogoImg = styled.img`
  height: 9.9rem;
`;

// 네비 버튼
// HeaderMenu
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

// 돋보기 + 검색 인풋 : SearchInputForm
// 돋보기 아이콘 : IconStyle, Icon1 (Icon2 as Icon1)

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

export { HeaderContainer };
export { Logo, LogoImg };
export { HeaderMenu, MenuButton };
export { SearchInputForm, IconStyle, Icon1, SearchInput };
export { ProfileWrapper, Avatar, Num };
export { NavIconStyle, Icon2, Icon3, Icon4, Icon5 };
