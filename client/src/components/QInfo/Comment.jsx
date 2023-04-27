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
  .cBtn {
    display: flex;
    justify-content: end;
  }
`;
const Btn = styled.button`
  background-color: ${(props) => props.color};
  padding: 3px 5px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 6px;
  color: white;
  font-weight: bolder;
`;

const Comment = ({ comment, c_id }) => {
  const { c_comment, m_name, createdAt, m_id, q_id } = comment;
  const [isEdit, setIsEdit] = useState(false);
  const [commentValue, setCommentValue] = useState(c_comment);

  const handleRemove = () => {
    axios.delete(`http://ec2-13-125-71-49.ap-northeast-2.compute.amazonaws.com:8080/comment/${c_id}`, {
      data: {
        m_id: m_id,
        q_id: q_id,
      },
    });
  };

  const onSubmit = () => {
    axios.patch(`http://ec2-13-125-71-49.ap-northeast-2.compute.amazonaws.com:8080/comment/edit`, {
      m_id: m_id,
      q_id: q_id,
      c_id: c_id,
      c_comment: commentValue,
    });
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
          <span>{commentValue}</span>
        )}
        <span className="name"> - {m_name}</span>
        <span className="date"> {createdAt}</span>
        <div className="cBtn">
          <Btn color="skyblue" onClick={() => setIsEdit(true)}>
            수정
          </Btn>
          <Btn color="tomato" onClick={() => handleRemove(c_id)}>
            삭제
          </Btn>
        </div>
      </CMain>
    </>
  );
};

export default Comment;
