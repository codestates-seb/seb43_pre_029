import React from 'react';
import styled from 'styled-components';

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
  padding-bottom: 8px;
  h1 {
    margin: 0px;
    padding: 0px;
  }
  /* .askBtn {
    background-color: rgb(9, 149, 255);
    width: 105px;
    height: 38px;
    border-radius: 5px;
    padding: 0px;
    border: none;
    a {
      color: white;
      padding: 10px;
      text-decoration-line: none;
      width: auto;
    }
  } */
`;

const SignupButton = styled.button`
  padding: 7px 11px;
  background-color: rgb(9, 149, 255);
  border-radius: 4px;
  border: 1px solid rgb(9, 149, 255);
  cursor: pointer;
  a {
    color: rgb(255, 255, 255);
    font-size: 13px;
    text-decoration-line: none;
  }
  &:hover {
    background-color: rgb(0, 116, 204);
    color: #fff;
  }
`;

const InfoheaderUnder = styled.div`
  border-bottom: 1px solid gray;
  font-size: 15px;
  color: rgb(59, 64, 69);
  padding-left: 16px;
  padding-bottom: 18px;
  span {
    padding: 0px 8px;
  }
`;

const QuestionInfo = () => {
  return (
    <>
      <InfoHeader>
        <h1>질문 제목</h1>
        <SignupButton>
          <a href="/">Ask Question</a>
        </SignupButton>
      </InfoHeader>
      <InfoheaderUnder>
        <span>Asked today</span>
        <span>Modified today</span>
        <span>Viewed 18 times</span>
      </InfoheaderUnder>
      <div className="InfoMain">
        <div className="InfoSide">추천 버튼</div>
        <div className="InfoValue">
          <div className="Improve">Closed, 하늘색 박스</div>
          <div className="">value</div>
          <div className="userProfil">유저 프로필</div>
        </div>
      </div>
    </>
  );
};

export default QuestionInfo;
