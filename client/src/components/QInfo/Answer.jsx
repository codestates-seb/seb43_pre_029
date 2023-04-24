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

const Answer = ({ answer, qanswers, a_id }) => {
  const { value, username, date, pic } = answer;
  const [checks, setChecks] = useState();
  const { id } = useParams();
  // console.log('@@@@@@@@@@@');
  // console.log('answer', answer.check);
  // console.log('qanswers', qanswers);
  // console.log('a_id', a_id);
  const onCheck = (a_id) => {
    axios
      .patch(`http://localhost:4000/questions/${id}`, { check: !qanswers.check })
      .then((response) => {
        const newCheck = response.data.answers.map((el) => {
          // console.log('a_id', a_id);
          // console.log('el', el);
          // console.log('el.a_id', el.a_id);
          // console.log('@@@@@@@@@@@@@@@@@');
          if (el.a_id === a_id) {
            return el;
          } else {
            return response.data.answers;
          }
        });
        // console.log(response.data.answers);
        setChecks(newCheck);
      })
      .catch((err) => console.log(Error));
  };
  // console.log('checks', checks);

  // console.log(qanswers[0].check);
  return (
    <AnswerMain>
      {/* <AnswerSide answer={answer} check={check} /> */}
      <AswSide>
        <button>UP</button>
        <div>0</div>
        <button>Down</button>
        <button>북마크</button>
        <button onClick={() => onCheck(a_id)}>체크</button>
        <button>아이콘</button>
      </AswSide>
      <div className="answerMain">
        <div>{value}</div>
        <ProfilLine>
          <Profil>
            <div className="date">{date}</div>
            <User>
              <div className="pic">
                <img src={pic} alt="profile" />
              </div>
              <div>
                <a href={'/'}>{username}</a>
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
