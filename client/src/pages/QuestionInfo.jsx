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

const InfoMain = styled.div`
  padding: 20px 25px;
  display: flex;
  border: 1px solid red;
  height: auto;
`;
const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid yellow;
  margin-right: 16px;
  button {
    width: 35px;
    height: 35px;
    border-style: none;
    background-color: white;
  }
`;
const InfoValue = styled.div`
  border: 1px solid blue;
  width: 100vw;
  margin-right: 16px;

  .infoValue {
    border: 1px solid;
    margin-bottom: 16.5px;
  }
`;
const InfoValueUnder = styled.div`
  display: flex;
  justify-content: end;
  .userProfil {
    border: 1px solid tomato;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 67px;
    padding: 5px 6px 7px 7px;
    margin-left: 80px;
    .creatTime {
      width: 150px;
      margin-bottom: 3px;
    }
    .user {
      display: flex;
      width: 150px;
      border: 1px solid blue;
      .name {
        border: 1px solid gold;
        margin-left: 7px;
      }
    }
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
      <InfoMain>
        <InfoSide>
          <button className="upBtn">Up</button>0<button className="downBtn">Down</button>
          <button>북마크</button>
          <button>아이콘</button>
        </InfoSide>
        <InfoValue>
          <div className="infoValue">value</div>
          <InfoValueUnder>
            <div className="userProfil">
              <div className="creatTime">
                <span>asked </span>
                <span>43 secs ago</span>
              </div>
              <div className="user">
                <div>프로필 이미지</div>
                <div className="name">이름</div>
              </div>
            </div>
          </InfoValueUnder>
        </InfoValue>
      </InfoMain>
    </>
  );
};

export default QuestionInfo;
