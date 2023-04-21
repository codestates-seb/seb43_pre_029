import React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import AskForm from '../components/Ask/AskForm';
import AskTitle from '../components/Ask/AskTitle';
=======
import questionimg from '../images/questionsform-img.png';
import pencil from '../images/pencil.png';
import AskForm from '../components/AskForm';
>>>>>>> f14897a134facf7d80ab11c97dd4448f793b3132

const Container = styled.div`
  padding-top: 2.8125rem;
  margin: 0 auto;
  width: 90vw;
`;

const Ask = () => {
  return (
    <Container>
      <AskTitle />
      <AskForm />
    </Container>
  );
};

export default Ask;
