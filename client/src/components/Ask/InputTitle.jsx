import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setAskTitle } from '../../store';

export default function InputForm({ setInputValue, inputValue }) {
  return (
    <div>
      <Box>
        <FlexColumn>
          <label htmlFor="title">제목</label>
          <p>Be specific and imagine you’re asking a question to another person.</p>
          <input
            name="title"
            type="text"
            placeholder="질문 글 제목을 적어주세요."
            onChange={(e) => {
              setInputValue({ ...inputValue, title: e.target.value });
              console.log('제목 inputValue', inputValue);
            }}
          />
        </FlexColumn>
      </Box>
    </div>
  );
}

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  background-color: white;
  padding: 24px;
  border: 1px solid lightgrey;
  margin-top: 20px;

  label {
    font-weight: bolder;
  }

  input {
    padding: 1rem;
    border: 0.05rem solid black;
  }
`;
