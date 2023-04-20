import React from 'react';
import styled from 'styled-components';
import QInfoSide from './QInfoSide';
import QInfoValue from './QInfoValue';

const QMain = styled.div`
  margin: 24px 16px;
  display: flex;
`;

const QInfoMain = ({ qinfo }) => {
  return (
    <QMain>
      <QInfoSide />
      <QInfoValue qinfo={qinfo} />
    </QMain>
  );
};

export default QInfoMain;
