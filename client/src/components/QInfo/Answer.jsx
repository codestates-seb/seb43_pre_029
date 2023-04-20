import React from 'react';
import styled from 'styled-components';
import AnswerSide from './AnswerSide';

const AnswerMain = styled.div`
  display: flex;
  border: 1px solid red;
  margin: 24px 16px;

  .answerMain {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ProfilLine = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
  border: 1px solid tomato;
`;
const Profil = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  padding: 5px 6px 7px 7px;
`;
const User = styled.div`
  width: 200px;
  height: 66px;
  margin-top: 8px;
  display: flex;
  border: 1px solid blue;
  .pic {
    margin-right: 8px;
  }
`;

const Answer = ({ answer }) => {
  const { value, username, date } = answer;

  return (
    <AnswerMain>
      <AnswerSide />
      <div className="answerMain">
        <div>{value}</div>
        <ProfilLine>
          <Profil>
            <div>{date}</div>
            <User>
              <div className="pic">사진</div>
              <div>{username}</div>
            </User>
          </Profil>
        </ProfilLine>
      </div>
    </AnswerMain>
  );
};
export default Answer;

// const Answer = ({ qinfo }) => {
//   const { answers } = qinfo;

//   return (
//     <>
//     {answers.map((answer) => (
//   <AnswerList answer={answer} />
// ))}
//     </>
//   );
// };
// export default Answer;
