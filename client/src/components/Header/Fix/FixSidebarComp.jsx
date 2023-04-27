import { IoEarthSharp } from 'react-icons/io5';

import {
  SidebarCategories,
  InformationIcon,
  SidebarMenuItem,
  SideImg,
  SidebarStarImgWrapper,
} from '../../style/Header/FixSideBarStyle';

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
const CategoryColletives = ({ src }) => {
  return (
    <>
      <SidebarCategories>
        COLLECTIVES
        <InformationIcon />
      </SidebarCategories>
      <SidebarMenuItem>
        <SidebarStarImgWrapper src={src} alt="SidebarImg" />
        Explore Collectives
      </SidebarMenuItem>
    </>
  );
};
const CategoryTeams = ({ src }) => {
  return (
    <>
      <SidebarCategories>TEAMS</SidebarCategories>
      <SideImg src={src} alt="SideImg" />
    </>
  );
};

export { CategoryPublic, CategoryColletives, CategoryTeams };
