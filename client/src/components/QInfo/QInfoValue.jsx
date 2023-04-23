import React from 'react';
import styled from 'styled-components';
const ProfilLine = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: end;
`;
const Profil = styled.div`
  width: 187px;
  height: 54px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  padding: 5px 6px 7px 7px;
  border-radius: 3px;
  background-color: rgb(217, 234, 247);
  .date {
    width: 187px;
    height: 16px;
    margin: 1px 0px 4px;
    color: rgb(106 115 124);
  }
`;
const User = styled.div`
  display: flex;
  .pic {
    margin-right: 8px;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  a {
    color: rgb(0 116 204);
    text-decoration: none;
  }
`;

const QInfoValue = ({ qinfo }) => {
  const { value, date, username } = qinfo;
  return (
    <div>
      <div>{value}</div>
      <ProfilLine>
        <Profil>
          <div className="date">{date}</div>
          <User>
            <div className="pic">
              <img
                src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                alt="profile"
              />
            </div>
            <div>
              <a href={'/'}>{username}</a>
            </div>
          </User>
        </Profil>
      </ProfilLine>
    </div>
  );
};

export default QInfoValue;
