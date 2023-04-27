import React, { useEffect, useState } from 'react';
import FixSideHeader from '../components/Header/Fix/FixSideHeader';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import { QInfoHeader, QInfoMain, Answer, Comment, AnswerForm } from '../components/QInfo/QInfoBind';

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

const QuestionInfo = ({ isLogin, searchvalueBind, isSearchBind }) => {
  const [qinfo, setQinfo] = useState([]);

  const { p_id } = useParams();
  const [comments, setComments] = useState([]);
  const [qanswers, setQianswers] = useState([]);
  useEffect(() => {
<<<<<<< HEAD
    axios.get(`/question/some-page/${p_id}`).then((res) => {
      setQinfo(res.data);
      setQianswers(res.data.answers);
      setComments(res.data.comments);
    });
  }, [p_id]);

=======
    axios
      .get(`http://ec2-13-125-71-49.ap-northeast-2.compute.amazonaws.com:8080/question/some-page/${p_id}`)
      .then((res) => {
        setQinfo(res.data);
        setQianswers(res.data.answers);
        setComments(res.data.comments);
      });
  }, [p_id]);
>>>>>>> 323581b6f5a8a1510ef6b95cf08a1cdc2ff1e27f
  return (
    <>
      <div style={{ display: 'flex' }}>
        <FixSideHeader searchvalueBind={searchvalueBind} isSearchBind={isSearchBind} />
        <QMain>
          <QInfoHeader qinfo={qinfo} />
          <QInfoMain qinfo={qinfo} />
          <CommentList>
            {comments.map((comment) => (
<<<<<<< HEAD
              <Comment comment={comment} key={comment.c_id} />
=======
              <Comment comment={comment} key={comment.c_id} c_id={comment.c_id} />
>>>>>>> 323581b6f5a8a1510ef6b95cf08a1cdc2ff1e27f
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
