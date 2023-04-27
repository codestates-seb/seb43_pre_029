import MainLogo from '../../../images/Logo/stack-overflow-logo-vector.svg';
import { headerSubmit } from '../../../logic/headerLogic';

import {
  Logo,
  LogoImg,
  HeaderMenu,
  MenuButton,
  SearchInputForm,
  SearchContainerStyle,
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

const HeaderForm = ({ searchvalueBind, isSearchBind }) => {
  const [keyword, setKeyword] = searchvalueBind;
  const [isSearched, setIsSearched] = isSearchBind;

  return (
    <SearchContainerStyle>
      <SearchInputForm onSubmit={(e) => headerSubmit(e, searchvalueBind, setIsSearched)}>
        <IconStyle>
          <Icon2 />
        </IconStyle>
        <SearchInput value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search..." />
      </SearchInputForm>
    </SearchContainerStyle>
  );
};

const HeaderButton = () => {
  return (
    <ButtonWrapper>
      <LoginButton>
        <a href="/login">Log In</a>
      </LoginButton>
      <SignupButton>
        <a href="/Signup">Sign up</a>
      </SignupButton>
    </ButtonWrapper>
  );
};

export { HeaderLogo, HeaderMenuContainer, HeaderForm, HeaderButton };
