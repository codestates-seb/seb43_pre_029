import React, { useState } from 'react';
import styled from 'styled-components';
import homeimg from '../images/home_img.png';
import Contnent from '../components/Home/Content';
import QuestionsList from '../components/Home/QuestionsList';
import FixSideHeader from '../components/Header/FixSideHeader';
import ModalSideHeader from '../components/Header/ModalSideHeader';
import Footer from '../components/Footer';

const HomeTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      {isLogin ? (
        <>
          <FixSideHeader />
          <HomeTemplate>
            <Contnent />
            <QuestionsList />
          </HomeTemplate>
        </>
      ) : (
        <>
          <ModalSideHeader />
          <Imgstyle>
            <img src={homeimg} alt="" />
          </Imgstyle>
        </>
      )}
      <Footer />
    </>
  );
}
