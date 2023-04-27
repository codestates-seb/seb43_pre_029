import MainLogo from '../../../images/Logo/stack-overflow-logo-vector.svg';
import FixSidebar from '../Fix/FixSideBar';

import {
  HeaderContainer,
  Logo,
  LogoImg,
  HeaderMenu,
  MenuButton,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
} from '../../style/Header/LoginFixSideHeaderstyle';

import { LoginHeaderForm, ProfileContainer, NavIconContainer } from './LoginFixSideHeaderComp';
import headerSearch from '../../../logic/headerSearch';

/**
 * 2023/04/23 - 리액트 Icon 스타일 컴포넌트 배열 - fe-HyungUk
 * @type JSX.Element[]
 */
function LoginFixSideHeader({ searchvalueBind }) {
  const IconArr = [<Icon2 />, <Icon3 />, <Icon4 />, <Icon5 />];

  return (
    <>
      <HeaderContainer onSubmit={headerSearch(searchvalueBind)}>
        <Logo href="/">
          <LogoImg src={MainLogo} alt="Main Logo" />
        </Logo>
        <HeaderMenu>
          <MenuButton href="#">Products</MenuButton>
        </HeaderMenu>
        <LoginHeaderForm searchvalueBind={searchvalueBind} />
        <ProfileContainer />

        {IconArr.map((Icon, idx) => (
          <NavIconContainer Icon={Icon} key={idx} />
        ))}
      </HeaderContainer>
      <FixSidebar />
    </>
  );
}

export default LoginFixSideHeader;
