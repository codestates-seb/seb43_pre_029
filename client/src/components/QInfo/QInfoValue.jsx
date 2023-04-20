import React from 'react';
import styled from 'styled-components';
const ProfilLine = styled.div`
  margin-top: 50px;
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

const QInfoValue = ({ qinfo }) => {
  const { value, date, username } = qinfo;
  return (
    <div>
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
  );
};

export default QInfoValue;
