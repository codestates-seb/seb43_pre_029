import React from 'react';
import styled from 'styled-components';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import { BsBookmark } from 'react-icons/bs';
import { RxCountdownTimer } from 'react-icons/rx';

const InfoSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  align-items: center;
  justify-content: center;
  .flex-item {
    margin-top: 3px;
  }
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
        <GoTriangleUp size="40px" color="lightgrey" className="flex-item" />
        <div>0</div>
        <GoTriangleDown size="40px" color="lightgrey" className="flex-item" />
        <BsBookmark size="30px" color="lightgrey" className="flex-item" />
        <RxCountdownTimer size="30px" color="lightgrey" className="flex-item" />
      </InfoSide>
    </div>
  );
};

export default QInfoSide;
