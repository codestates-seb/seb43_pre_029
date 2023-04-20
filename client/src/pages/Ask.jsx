import React from 'react';
import styled from 'styled-components';
import AskForm from '../components/Ask/AskForm';
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
        <AskForm />
      </Container>
      <Footer />
    </>
  );
};

export default Ask;
