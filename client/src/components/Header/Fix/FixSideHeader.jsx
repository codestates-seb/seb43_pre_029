import React from 'react';
import FixSidebar from './FixSideBar';

import { HeaderContainer } from '../../style/Header/FixSideHeaderstyle';
import { HeaderLogo, HeaderMenuContainer, HeaderForm, HeaderButton } from './FixSideHeaderComp';

function FixSideHeader({ searchvalueBind, isSearchBind }) {
  return (
    <>
      <HeaderContainer>
        <HeaderLogo />
        <HeaderMenuContainer />
        <HeaderForm searchvalueBind={searchvalueBind} isSearchBind={isSearchBind} />
        <HeaderButton />
      </HeaderContainer>
      <FixSidebar />
    </>
  );
}

export default FixSideHeader;
