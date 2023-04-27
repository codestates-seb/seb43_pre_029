import React, { useEffect, useState } from 'react';
import FixSideHeader from '../components/Header/Fix/FixSideHeader';
import QInfoHeader from '../components/QInfo/QInfoHeader';
import QInfoMain from '../components/QInfo/QInfoMain';
import Answer from '../components/QInfo/Answer';
import axios from 'axios';
import styled from 'styled-components';
import Comment from '../components/QInfo/Comment';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import AnswerForm from '../components/QInfo/AnswerForm';

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
  const [qinfo, setQinfo] = useState([]);
  console.log('✅', qinfo);
  const { p_id } = useParams();
  const [comments, setComments] = useState([]);
  const [qanswers, setQianswers] = useState([]);
  useEffect(() => {
    axios
      .get(`http://ec2-13-125-71-49.ap-northeast-2.compute.amazonaws.com:8080/question/some-page/${p_id}`)
      .then((res) => {
        setQinfo(res.data);
        // console.log('data', res.data);
        setQianswers(res.data.answers);
        // console.log('answers', res.data.answers);
        setComments(res.data.comments);
        // console.log('comments', res.data.comments);
      });
  }, []);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <FixSideHeader />
        <QMain>
          <QInfoHeader qinfo={qinfo} />
          <QInfoMain qinfo={qinfo} />
          <CommentList>
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </CommentList>
          <AnswerTotal>{qinfo.answerCount} Answers</AnswerTotal>
          {qanswers.map((answer) => (
            <Answer
              answer={answer}
              key={answer.a_id}
              a_id={answer.a_id}
              qanswers={qanswers}
              qinfo={qinfo}
              setQianswers={setQianswers}
            />
          ))}
          <AnswerInput>
            <h2>Your Answer</h2>
            <AnswerForm qinfo={qinfo} setQianswers={setQianswers} qanswers={qanswers} />
          </AnswerInput>
        </QMain>
      </div>
      <Footer />
    </>
  );
};

export default QuestionInfo;
