import React from 'react';
import styled from 'styled-components';

const CMain = styled.div`
  width: auto;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid rgb(241 242 243);

  .name {
    color: rgb(0 116 204);
  }
  .date {
    color: rgb(130, 131, 132);
  }
`;
const Comment = ({ comment }) => {
  const { value, username, date } = comment;
  return (
    <>
      <CMain>
        <span>{value}</span>
        <span className="name"> - {username}</span>
        <span className="date"> {date}</span>
      </CMain>
    </>
  );
};

export default Comment;
