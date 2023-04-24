import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  padding-right: 20px;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 20px 25px;
  padding-bottom: 8px;
  margin-top: 2.8125rem;
  h1 {
    font-size: 28px;
  }
`;

const AskBtn = styled.button`
  padding: 10.4px;
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

const QInfoHeader = ({ qinfo }) => {
  const { question, view } = qinfo;
  return (
    <HeaderBox>
      <InfoHeader>
        <h1>{question}</h1>
        <AskBtn>
          <a href="/">Ask Question</a>
        </AskBtn>
      </InfoHeader>
      <InfoheaderUnder>
        <span>Asked today</span>
        <span>Modified today</span>
        <span>Viewed {view} times</span>
      </InfoheaderUnder>
    </HeaderBox>
  );
};

export default QInfoHeader;
