import React from 'react';
import styled from 'styled-components';

const ContnentTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 770px;
  padding: 20px 0px 20px 25px;
  margin-right: 30px;
  /* border: 1px solid red; */
`;
const ContentHeader = styled.div`
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
  h1 {
    font-size: 30px;
  }
`;
const AskBtn = styled.button`
  padding: 10.4px;
  background-color: rgb(9, 149, 255);
  border-radius: 4px;
  border: 1px solid rgb(9, 149, 255);
  height: 30px;
  display: flex;
  align-items: center;
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
const ContentA = styled.div`
  display: flex;
  justify-content: end;
  button {
    height: 40px;
    border: 1px solid gray;
    :not(:first-child) {
      background-color: white;
      border-left: none;
    }
    :first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    :last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  a {
    padding: 12px;
    /* background-color: tomato; */
    color: hsl(210, 8%, 45%);
    text-decoration-line: none;
    :not(:last-child) {
      border-right: 1px solid gray;
    }
    .bountiedNum {
      color: rgb(255 255 255);
      margin-right: 5px;
      padding: 0.2em 0.5em 0.25em;
      border-radius: 2px;
      background-color: rgb(0 116 204);
      font-size: 11px;
    }
  }
`;

const Contnent = () => {
  return (
    <ContnentTemplate>
      <ContentHeader>
        <h1>Top Questions</h1>
        <AskBtn>
          <a href="/">Ask Question</a>
        </AskBtn>
      </ContentHeader>
      <ContentA>
        <button>
          <a href="/?tab=interesting">Interesting</a>
        </button>
        <button>
          <a href="/">
            <span className="bountiedNum">224</span> Bountied
          </a>
        </button>
        <button>
          <a href="/">Hot</a>
        </button>
        <button>
          <a href="/">Week</a>
        </button>
        <button>
          <a href="/">Month</a>
        </button>
      </ContentA>
    </ContnentTemplate>
  );
};

export default Contnent;
