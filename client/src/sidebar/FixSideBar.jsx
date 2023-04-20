import React from 'react';
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
  width: 29.96875rem;
  padding-top: 2.8125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 0.0625rem solid rgb(214, 217, 220);
`;

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.875rem;
  margin-left: 19.375rem;

  & > *:nth-child(n + 4):nth-child(-n + 6) {
    padding: 0.4375rem 0 0.4375rem 1.75rem;
  }

  & > *:nth-child(7) {
    padding: 0 1.25rem 0 0;
  }
`;

const SidebarCategories = styled.p`
  font-size: 0.78125rem;
  margin: 0.875rem 0 0.4375rem 0.4375rem;
  color: rgb(103, 103, 103);
  display: flex;
  justify-content: space-between;
`;

const InformationIcon = styled(IoIosInformationCircle)`
  font-size: 1rem;
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
  margin-bottom: 0.625rem;
  padding: 0.4375rem 0 0.4375rem 0.25rem;
  color: rgb(85, 85, 85);
  z-index: 9999;
  background-color: transparent;
  font-size: 0.8125rem;
  cursor: pointer;

  & > svg {
    color: #7e7e7e;
    margin-right: 0.3125rem;
    font-size: 1.125rem;
  }

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

const SideImg = styled.img`
  width: 10.625rem;
`;

const SidebarStarImgWrapper = styled.img`
  height: 1.125rem;
  width: auto;
  margin-right: 0.3125rem;
`;

const FixSidebar = () => {
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

export default FixSidebar;
