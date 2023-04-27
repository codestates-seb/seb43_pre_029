import React from 'react';
import FixSidebar from './FixSideBar';

import { HeaderContainer } from '../../style/Header/FixSideHeaderstyle';
import {
  HeaderLogo,
  HeaderMenuContainer,
  HeaderForm,
  HeaderButtonLogin,
  HeaderButtonLogout,
} from './FixSideHeaderComp';

function FixSideHeader({ searchvalueBind, isSearchBind }) {
  return (
    <>
      <HeaderContainer>
        <HeaderLogo />
        <HeaderMenuContainer />
        <HeaderForm searchvalueBind={searchvalueBind} isSearchBind={isSearchBind} />
        <HeaderButtonLogin />
        {/* { ? <HeaderButtonLogin /> : <HeaderButtonLogout/>} */}
      </HeaderContainer>
      <FixSidebar />
    </>
  );
}

export default FixSideHeader;
