import React from 'react';
import styled from 'styled-components';
import AnswerSide from './AnswerSide';

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

const Answer = ({ answer }) => {
  const { value, username, date, pic } = answer;

  return (
    <AnswerMain>
      <AnswerSide />
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
