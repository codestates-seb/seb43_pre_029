import styled from 'styled-components';
import SideBarImg from '../images/SidebarImg.png';
import SidebarStarImg from '../images/SidebarStarImg.png';

import { IoEarthSharp } from 'react-icons/io5';
import { IoIosInformationCircle } from 'react-icons/io';

const SidebarWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  width: 479.5px;
  padding-top: 2.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid rgb(214, 217, 220);
`;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  margin-left: 310px;

  & > *:nth-child(n + 4):nth-child(-n + 6) {
    padding: 7px 0 7px 28px;
  }

  & > *:nth-child(7) {
    padding: 0 20px 0 0;
  }
`;

const SidebarCategories = styled.p`
  font-size: 12.5px;
  margin: 14px 0 7px 7px;
  color: rgb(103, 103, 103);
  display: flex;
  justify-content: space-between;
`;

const InformationIcon = styled(IoIosInformationCircle)`
  font-size: 16px;
  color: #737373;
`;

// const ItemHover = styled.div`
//   border: 1px solid black;
//   &:hover {
//     background-color: rgb(241, 242, 243);
//     border-right: 0.1875rem solid rgb(244, 130, 37);
//   }
// `;

// 클릭됐을 때.
// &:hover {
//   color: black;
//   background-color: rgb(241, 242, 243);
//   border-right: 0.1875rem solid rgb(244, 130, 37);
// }

const SidebarMenuItem = styled.button`
  border: none;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  padding: 7px 0 7px 4px;
  color: rgb(85, 85, 85);
  z-index: 9999;
  background-color: transparent;
  font-size: 13px;
  cursor: pointer;

  & > svg {
    color: #7e7e7e;
    margin-right: 5px;
    font-size: 18px;
  }

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const SideImg = styled.img`
  width: 170px;
`;

const SidebarStarImgWrapper = styled.img`
  height: 18px;
  width: auto;
  margin-right: 5px;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarMenuItem>Home</SidebarMenuItem>
        <SidebarCategories>PUBLIC</SidebarCategories>
        <SidebarMenuItem>
          <IoEarthSharp />
          Questions
        </SidebarMenuItem>
        <SidebarMenuItem>Tags</SidebarMenuItem>
        <SidebarMenuItem>Users</SidebarMenuItem>
        <SidebarMenuItem>Companies</SidebarMenuItem>
        <SidebarCategories>
          COLLECTIVES
          <InformationIcon />
        </SidebarCategories>
        <SidebarMenuItem>
          <SidebarStarImgWrapper src={SidebarStarImg} alt="Sidebar Star" />
          Explore Collectives
        </SidebarMenuItem>
        <SidebarCategories>TEAMS</SidebarCategories>
        <SideImg src={SideBarImg} alt="SideBarImg" />
      </SidebarMenu>
    </SidebarWrapper>
  );
};

export default Sidebar;
