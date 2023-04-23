import MainLogo from '../../../images/Logo/stack-overflow-logo-vector.svg';

import {
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
} from '../../style/Header/FixSideHeaderstyle';

const HeaderLogo = () => {
  return (
    <Logo href="/">
      <LogoImg src={MainLogo} alt="Main Logo" />
    </Logo>
  );
};

const HeaderMenuContainer = () => {
  return (
    <HeaderMenu>
      <MenuButton href="#">About</MenuButton>
      <MenuButton href="#">Products</MenuButton>
      <MenuButton href="#">For Teams</MenuButton>
    </HeaderMenu>
  );
};

const HeaderForm = () => {
  return (
    <form>
      <SearchInputWrapper>
        <IconStyle>
          <Icon2 />
        </IconStyle>
        <SearchInput type="text" placeholder="Search..." />
      </SearchInputWrapper>
    </form>
  );
};

const HeaderButton = () => {
  return (
    <ButtonWrapper>
      <LoginButton>
        <a href="/login">Log in</a>
      </LoginButton>
      <SignupButton>
        <a href="/signup">Sign up</a>
      </SignupButton>
    </ButtonWrapper>
  );
};

export { HeaderLogo, HeaderMenuContainer, HeaderForm, HeaderButton };
