import React from 'react';
import styled from 'styled-components';
import AskMain from '../components/Ask/AskMain';
import AskTitle from '../components/Ask/AskTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  padding-top: 2.8125rem;
  margin: 0 auto;
  width: 90vw;
`;

const Ask = () => {
  return (
    <>
      <Header />
      <Container>
        <AskTitle />
        <AskMain />
      </Container>
      <Footer />
    </>
  );
};

export default Ask;
