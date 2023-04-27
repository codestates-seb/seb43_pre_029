import MainLogo from '../../../images/Logo/stack-overflow-logo-vector.svg';
import {
  Logo,
  LogoImg,
  HeaderMenu,
  MenuButton,
  SearchInputWrapper,
  IconStyle,
  Icon1,
  SearchInput,
  ProfileWrapper,
  Avatar,
  Num,
} from '../../style/Header/LoginModalSideHeaderStyle';
import { HamburgerContainer } from './ModalSideHeaderComp';
const LogoContainer = () => {
  return (
    <>
      <Logo href="/">
        <LogoImg src={MainLogo} alt="Main Logo" />
      </Logo>
      <HeaderMenu>
        <MenuButton href="#">Products</MenuButton>
      </HeaderMenu>
    </>
  );
};

const SearchForm = () => {
  return (
    <form>
      <SearchInputWrapper>
        <IconStyle>
          <Icon1 />
        </IconStyle>
        <SearchInput type="text" placeholder="Search..." />
      </SearchInputWrapper>
    </form>
  );
};

const ProfileContainer = () => {
  return (
    <ProfileWrapper>
      <Avatar
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_1280.png"
        alt="User Avatar"
      />
      <Num>1</Num>
    </ProfileWrapper>
  );
};

export { HamburgerContainer, LogoContainer, SearchForm, ProfileContainer };
