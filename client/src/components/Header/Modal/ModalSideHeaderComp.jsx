import MainLogo from '../../../images/Logo/stack-overflow-logo-vector.svg';
import ModalSideBarImg from '../../../images/CreateTeam/ModalSideBarImg.png';
import SidebarStarImg from '../../../images/Icon/SidebarStarImg.png';
import { headerSearch } from '../../../logic/headerLogic';

import {
  HamburgerStyle,
  Icon1Close,
  Icon1Open,
  Logo,
  LogoImg,
  HeaderMenu,
  MenuButton,
  SearchContainerStyle,
  SearchInputForm,
  IconStyle,
  Icon2,
  SearchInput,
  ButtonWrapper,
  LoginButton,
  SignupButton,
  SidebarWrapper,
  SidebarMenu,
  SidebarMenuItem,
} from '../../style/Header/ModalSideHeaderStyle';
import { CategoryPublic, CategoryColletives, CategoryTeams } from '../Fix/FixSidebarComp';

const HamburgerContainer = ({ onToggle, open }) => {
  return (
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
            <CategoryPublic />
            <CategoryColletives src={SidebarStarImg} />
            <CategoryTeams src={ModalSideBarImg} />
          </SidebarMenu>
        </SidebarWrapper>
      )}
    </div>
  );
};

const LogoContainer = () => {
  return (
    <>
      <Logo href="/">
        <LogoImg src={MainLogo} alt="Main Logo" />
      </Logo>
      <HeaderMenu>
        <MenuButton href="#">About</MenuButton>
        <MenuButton href="#">Products</MenuButton>
        <MenuButton href="#">For Teams</MenuButton>
      </HeaderMenu>
    </>
  );
};

const SearchContainer = ({ searchvalueBind }) => {
  const [keyword, setKeyword] = searchvalueBind;
  return (
    <SearchContainerStyle>
      <SearchInputForm
        onSubmit={(e) => {
          e.preventDefault();
          headerSearch(searchvalueBind);
        }}
      >
        <IconStyle>
          <Icon2 />
        </IconStyle>
        <SearchInput value={keyword} onChange={setKeyword} placeholder="Search..." />
      </SearchInputForm>
    </SearchContainerStyle>
  );
};

const MemberButton = () => {
  return (
    <>
      <ButtonWrapper>
        <LoginButton>
          <a href="/login">Log in</a>
        </LoginButton>
        <SignupButton>
          <a href="/signup">Sign up</a>
        </SignupButton>
      </ButtonWrapper>
    </>
  );
};

export { HamburgerContainer, LogoContainer, SearchContainer, MemberButton };
