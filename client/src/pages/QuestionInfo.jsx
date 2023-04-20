import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import QInfoHeader from '../components/QInfo/QInfoHeader';
import Footer from '../components/Footer';
import QInfoMain from '../components/QInfo/QInfoMain';
import Answer from '../components/QInfo/Answer';
import axios from 'axios';
import styled from 'styled-components';

const AnswerTotal = styled.h2`
  margin-bottom: 8px;
  margin-left: 16px;
  font-size: 23px;
`;
const QuestionInfo = () => {
  const [qinfo, setQinfo] = useState([]);
  const [qanswers, setQianswers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/questions/1').then((res) => {
      setQinfo(res.data);
      setQianswers(res.data.answers);
    });
  }, []);
  console.log(qanswers);
  return (
    <>
      <Header />
      <QInfoHeader qinfo={qinfo} />
      <QInfoMain qinfo={qinfo} />
      <AnswerTotal>{qanswers.length} Answers</AnswerTotal>
      {qanswers.map((answer) => (
        <Answer answer={answer} key={answer.id} />
      ))}
      <Footer />
    </>
  );
};

export default QuestionInfo;
