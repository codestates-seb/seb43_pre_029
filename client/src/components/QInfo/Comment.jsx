import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const CMain = styled.div`
  width: auto;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid rgb(241 242 243);
  input {
    width: 600px;
    height: 30px;
    font-size: 1rem;
  }
  .name {
    color: rgb(0 116 204);
  }
  .date {
    color: rgb(130, 131, 132);
  }
`;
const Btn = styled.button`
  background-color: ${(props) => props.color};
  color: rgb(255, 255, 255);
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
  margin: 10px 20px;
  font-weight: bolder;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
`;

const Comment = ({ comment, c_id }) => {
  const { value, username, date } = comment;
  const [isEdit, setIsEdit] = useState(false);
  const [commentValue, setCommentValue] = useState(value);

  const handleRemove = () => {
    axios.delete(`/comment/${c_id}`, { m_id: 0, q_id: 0 });
  };

  const onSubmit = () => {
    axios.patch(`/comment/edit`, { m_id: 0, q_id: 0, c_id: 0, c_comment: commentValue });
  };
  return (
    <>
      <CMain>
        {isEdit ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
              setIsEdit(false);
            }}
          >
            <input value={commentValue} onChange={(e) => setCommentValue(e.target.value)} />
          </form>
        ) : (
          <span>{value}</span>
        )}
        <span className="name"> - {username}</span>
        <span className="date"> {date}</span>
        <div>
          <Btn color="skyblue" onClick={() => setIsEdit(true)}>
            수정
          </Btn>
          <Btn color="tomato" onClick={() => handleRemove(c_id)}>
            x
          </Btn>
        </div>
      </CMain>
    </>
  );
};

export default Comment;
