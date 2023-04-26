import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const AnswerMain = styled.div`
  display: flex;
  margin: 24px 16px;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(227 230 232);
  .answerMain {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .addComment {
      color: gray;
      font-size: 13px;
    }
  }
`;
const AswSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  button,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    margin: 3px;
    padding: 0px;
  }
`;
const ProfilLine = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
`;
const Profil = styled.div`
  width: 187px;
  height: 54px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 5px 6px 7px 7px;
  font-size: 13px;
  .date {
    width: 187px;
    height: 16px;
    margin: 1px 0px 4px;
    color: rgb(106 115 124);
  }
`;
const User = styled.div`
  display: flex;
  .pic {
    margin-right: 8px;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  a {
    color: rgb(0 116 204);
    text-decoration: none;
  }
`;

const Answer = ({ answer, a_id }) => {
  const { a_content, m_name, createdAt, pic } = answer;
  const [newAnswer, setNewAnswer] = useState();

  const onCheck = (a_id) => {
    axios
      .patch(`http://ec2-3-39-194-243.ap-northeast-2.compute.amazonaws.com:8080/question/edit/answer-accept/1`, {
        q_id: 1,
        m_id: 1,
      }) // body {m_id, q_id} ??
      .then((response) => {
        const newAnswers = response.data.answers.map((el) => {
          if (el.a_id === a_id) {
            console.log('a_id', a_id);
            return { ...el, check: !el.check };
          }
          return el;
        });
        setNewAnswer(newAnswers);
      })
      .catch((err) => console.log(Error));
  };
  return (
    <AnswerMain>
      <AswSide>
        <button>UP</button>
        <div>0</div>
        <button>Down</button>
        <button>북마크</button>
        <button onClick={() => onCheck(a_id)}>{'체크'}</button>
        <button>아이콘</button>
      </AswSide>
      <div className="answerMain">
        <div>{a_content}</div>
        <ProfilLine>
          <Profil>
            <div className="date">{createdAt}</div>
            <User>
              <div className="pic">
                <img src={pic} alt="profile" />
              </div>
              <div>
                <a href={'/'}>{m_name}</a>
              </div>
            </User>
          </Profil>
        </ProfilLine>
        <div className="addComment">Add a comment</div>
      </div>
    </AnswerMain>
  );
};
export default Answer;
