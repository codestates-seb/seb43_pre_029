import React, { useEffect, useState } from 'react';
import FixSideHeader from '.././components/Header/FixSideHeader';
import QInfoHeader from '../components/QInfo/QInfoHeader';
import QInfoMain from '../components/QInfo/QInfoMain';
import Answer from '../components/QInfo/Answer';
import axios from 'axios';
import styled from 'styled-components';
import Comment from '../components/QInfo/Comment';
import Quill from '../components/Quill';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
const QMain = styled.div`
  width: 800px;
  margin: auto;
  margin-top: 2.8125rem;
`;
const AnswerTotal = styled.h2`
  margin: 20px 0px 8px 26px;
  font-size: 23px;
`;

const AnswerInput = styled.div`
  margin: 16px;
  h2 {
    margin-bottom: 16px;
    padding-top: 20px;
  }
`;
const CommentList = styled.div`
  border-top: 1px solid rgb(227 230 232);
  width: auto;
  margin: 0px 20px 5px 70px;
`;

const QuestionInfo = () => {
  const { id } = useParams();
  const [qinfo, setQinfo] = useState([]);
  const [qanswers, setQianswers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/questions/${id}`).then((res) => {
      setQinfo(res.data);
      setQianswers(res.data.answers);
      setComments(res.data.comment);
    });
  }, [id]);

  return (
    <>
      <FixSideHeader />
      <QMain>
        <QInfoHeader qinfo={qinfo} />
        <QInfoMain qinfo={qinfo} />
        <CommentList>
          {comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </CommentList>
        <AnswerTotal>{qanswers.length} Answers</AnswerTotal>
        {qanswers.map((answer) => (
          <Answer answer={answer} key={answer.id} />
        ))}
        <AnswerInput>
          <h2>Your Answer</h2>
          <Quill />
        </AnswerInput>
      </QMain>
      <Footer />
    </>
  );
};

export default QuestionInfo;
