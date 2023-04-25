import React from 'react';
import FixSidebar from './FixSideBar';

import { HeaderContainer } from '../../style/Header/FixSideHeaderstyle';
import { HeaderLogo, HeaderMenuContainer, HeaderForm, HeaderButton } from './FixSideHeaderComp';

function FixSideHeader() {
  return (
    <>
      <HeaderContainer>
        <HeaderLogo />
        <HeaderMenuContainer />
        <HeaderForm />
        <HeaderButton />
      </HeaderContainer>
      <FixSidebar />
    </>
  );
}

export default FixSideHeader;
