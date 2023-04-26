import { useState } from 'react';

import { HeaderContainer, NavIconStyle, Icon2, Icon3, Icon4, Icon5 } from '../../style/LoginModalSideHeaderStyle';
import { HamburgerContainer, LogoContainer, SearchForm, ProfileContainer } from './LoginModalSideHeaderComp';

function LoginModalSideHeader({ isOpen }) {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  const IconArr = [<Icon2 />, <Icon3 />, <Icon4 />, <Icon5 />];

  return (
    <>
      <HeaderContainer>
        <HamburgerContainer onToggle={onToggle} open={open} />
        <LogoContainer />
        <SearchForm />
        <ProfileContainer />
        {IconArr.map((el, idx) => (
          <NavIconStyle key={idx}>{el}</NavIconStyle>
        ))}
      </HeaderContainer>
    </>
  );
}

export default LoginModalSideHeader;
