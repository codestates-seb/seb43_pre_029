import React from 'react';
import styled from 'styled-components';

const AswSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  border: 1px solid;
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

const AnswerSide = () => {
  return (
    <div>
      <AswSide>
        <button>UP</button>
        <div>0</div>
        <button>Down</button>
        <button>북마크</button>
        <button>아이콘</button>
      </AswSide>
    </div>
  );
};

export default AnswerSide;
