import React from 'react';
import styled from 'styled-components';

const InfoSide = styled.div`
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

const QInfoSide = () => {
  return (
    <div>
      <InfoSide>
        <button>UP</button>
        <div>0</div>
        <button>Down</button>
        <button>북마크</button>
        <button>아이콘</button>
      </InfoSide>
    </div>
  );
};

export default QInfoSide;
