import React, { useState } from 'react';
import styled from 'styled-components';
import homeimg from '../images/home_img.png';
import Contnent from '../components/Home/Content';
import QuestionsList from '../components/Home/QuestionsList';
import NoSideHeader from '../components/Header/NoSideHeader';

const HomeTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90wh;
  margin-top: 2.8125rem;
`;

const Imgstyle = styled.div`
  img {
    padding-top: 2.8125rem;
    width: 100%;
  }
`;

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <NoSideHeader />
      {isLogin ? (
        <HomeTemplate>
          <Contnent />
          <QuestionsList />
        </HomeTemplate>
      ) : (
        <Imgstyle>
          <img src={homeimg} alt="" />
        </Imgstyle>
      )}
    </>
  );
}
