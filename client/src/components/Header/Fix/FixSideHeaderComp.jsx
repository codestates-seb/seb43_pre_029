import MainLogo from '../../../images/Logo/stack-overflow-logo-vector.svg';
import headerSearch from '../../../logic/headerSearch';

import {
  Logo,
  LogoImg,
  HeaderMenu,
  MenuButton,
  SearchInputWrapper,
  SearchForm,
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
    <SearchForm
      onSubmit={(e) => {
        e.preventDefault();
        headerSearch(keyword, setKeyword);
        setIsSearched(true);
      }}
    >
      <SearchInputWrapper>
        <IconStyle>
          <Icon2 />
        </IconStyle>
        <SearchInput value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search..." />
      </SearchInputWrapper>
    </SearchForm>
  );
};

const HeaderButtonLogin = () => {
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

const HeaderButtonLogout = () => {
  return (
    <ButtonWrapper>
      <LoginButton>
        <a>Log out</a>
      </LoginButton>
      <SignupButton>
        <a href="/mypage">myPage</a>
      </SignupButton>
    </ButtonWrapper>
  );
};

export { HeaderLogo, HeaderMenuContainer, HeaderForm, HeaderButtonLogin, HeaderButtonLogout };
