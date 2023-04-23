import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import InputTitle from './InputTitle';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAskContent, setAskTitle } from '../../store';

const AskMain = () => {
  const [inputValue, setInputValue] = useState({
    title: '',
    body: '',
  });

  return (
    <>
      <form>
        <InputTitle setInputValue={setInputValue} inputValue={inputValue} />
        <Box>
          <label htmlFor="body">본문</label>
          <p>Be specific and imagine you’re asking a question to another person.</p>
          <Editor setInputValue={setInputValue} inputValue={inputValue} />
        </Box>
      </form>
      <Btn color="red">clear(초기화)</Btn>
      <Btn>submit(제출)</Btn>
    </>
  );
};

export default AskMain;

const Btn = styled.button`
  background-color: ${(props) => (props.color ? props.color : '#0995ff')};
  color: rgb(255, 255, 255);
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
  margin-top: ${(props) => (props.top ? props.top : '0.85rem')};
  font-weight: bolder;
`;

const Container = styled.div`
  width: 100%;
`;

const RowBox = styled.div`
  width: 100%;
  display: flex;
`;

const Viewer = styled.div`
  width: calc(50% - 2rem);
  height: 20rem;
  padding: 1.2rem;
  margin-top: 1.4rem;
  border: 0.2rem solid gray;
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
