import React from 'react';
import SideBarImg from '../../../images/CreateTeam/SidebarImg.png';

import { CategoryPublic, CategoryColletives, CategoryTeams } from './FixSidebarComp';
import { SidebarWrapper, SidebarMenu, SidebarMenuItem } from '../../style/Header/FixSideBarStyle';

const FixSidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarMenuItem>
          <a href="/">Home</a>
        </SidebarMenuItem>
        <CategoryPublic />
        <CategoryColletives src={SideBarImg} />
        <CategoryTeams src={SideBarImg} />
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default FixSidebar;
