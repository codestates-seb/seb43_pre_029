import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
const AnswerInput = styled.div`
  margin-bottom: 60px;
`;
const PostBtn = styled.button`
  padding: 10.4px;
  background-color: rgb(9, 149, 255);
  color: rgb(255, 255, 255);
  font-size: 0.8125rem;
  border-radius: 0.25rem;
  border: 0.0625rem solid rgb(9, 149, 255);
  cursor: pointer;

  &:hover {
    background-color: rgb(0, 116, 204);
    color: #fff;
  }
`;

export default function Quill() {
  return (
    <form>
      <AnswerInput>
        <ReactQuill style={{ height: '200px', fontSize: '16px' }} placeholder="Write something..." />
      </AnswerInput>
      <PostBtn>Post Your Answer</PostBtn>
    </form>
  );
}
