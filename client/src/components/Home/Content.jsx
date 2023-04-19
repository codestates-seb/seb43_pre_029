import React from 'react';
import styled from 'styled-components';

const ContnentTemplate = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: auto;
  border-bottom: 1px solid black;
  padding-bottom: 20px;
`;
const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 25px;
  margin-bottom: 5px;
  h1 {
    margin: 0px;
    padding: 0px;
  }
  .askBtn {
    background-color: hsl(206, 100%, 52%);
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
  }
`;

const ContentA = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 25px;

  .aBtn {
    height: 40px;
    /* border-radius: 5px; */
    border: 1px solid gray;
    border-radius: 5px;
  }
  a {
    padding: 12px;
    /* background-color: tomato; */
    color: hsl(210, 8%, 45%);
    text-decoration-line: none;
    :not(:last-child) {
      border-right: 1px solid gray;
    }
  }
`;

const Contnent = () => {
  return (
    <ContnentTemplate>
      <ContentHeader>
        <h1>Top Questions</h1>
        <button className="askBtn">
          <a href="/">Ask Question</a>
        </button>
      </ContentHeader>
      <ContentA>
        <button className="aBtn">
          <a href="/?tab=interesting">Interesting</a>
          <a href="/">Bountied</a>
          <a href="/">Hot</a>
          <a href="/">Week</a>
          <a href="/">Month</a>
        </button>
      </ContentA>
    </ContnentTemplate>
  );
};

export default Contnent;
