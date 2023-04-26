import MainLogo from '../../../images/Logo/stack-overflow-logo-vector.svg';
import ModalSideBarImg from '../../../images/CreateTeam/ModalSideBarImg.png';
import SidebarStarImg from '../../../images/Icon/SidebarStarImg.png';

import { IoEarthSharp } from 'react-icons/io5';

import {
  HamburgerStyle,
  Icon1Close,
  Icon1Open,
  Logo,
  LogoImg,
  HeaderMenu,
  MenuButton,
  SearchForm,
  SearchInputWrapper,
  IconStyle,
  Icon2,
  SearchInput,
  ButtonWrapper,
  LoginButton,
  SignupButton,
  SidebarWrapper,
  SidebarCategories,
  SidebarMenu,
  InformationIcon,
  SidebarMenuItem,
  SideImg,
  SidebarStarImgWrapper,
} from '../../style/Header/ModalSideHeaderStyle';

const CategoryPublic = () => {
  return (
    <>
      <SidebarCategories>PUBLIC</SidebarCategories>
      <SidebarMenuItem>
        <IoEarthSharp />
        Questions
      </SidebarMenuItem>
      <SidebarMenuItem>Tags</SidebarMenuItem>
      <SidebarMenuItem>Users</SidebarMenuItem>
      <SidebarMenuItem>Companies</SidebarMenuItem>
    </>
  );
};

const CategoryColletives = () => {
  return (
    <>
      <SidebarCategories>
        COLLECTIVES
        <InformationIcon />
      </SidebarCategories>
      <SidebarMenuItem>
        <SidebarStarImgWrapper src={SidebarStarImg} alt="Sidebar Star" />
        Explore Collectives
      </SidebarMenuItem>
    </>
  );
};

const CategoryTeams = () => {
  return (
    <>
      <SidebarCategories>TEAMS</SidebarCategories>
      <SideImg src={ModalSideBarImg} alt="SideBarImg" />
    </>
  );
};

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
            <CategoryColletives />
            <CategoryTeams />
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

const SearchForms = () => {
  return (
    <SearchForm>
      <SearchInputWrapper>
        <IconStyle>
          <Icon2 />
        </IconStyle>
        <SearchInput type="text" placeholder="Search..." />
      </SearchInputWrapper>
    </SearchForm>
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

export { HamburgerContainer, LogoContainer, SearchForms, MemberButton };
