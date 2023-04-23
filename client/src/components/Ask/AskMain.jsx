import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import InputTitle from './InputTitle';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAskContent, setAskTitle } from '../../store';

/**
 *
 * @returns 질문글 작성하는 페이지
 */
const AskMain = () => {
  const [inputValue, setInputValue] = useState({
    title: '',
    body: '',
  });

  /**
   * 질문 글 등록 기능!
   * @param {*} e : 이벤트 객체
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/questions', inputValue)
      .then((res) => {
        alert('질문 게시글 등록 완료하였습니다!');
        setInputValue((prevInputValue) => ({
          ...prevInputValue,
          title: '',
          body: '',
        }));
      })
      .catch((err) => {
        console.error(err);
        alert('질문 게시글 등록에 실패하였습니다.');
      });
  };

  /**
   * 질문 글 초기화 기능!
   */
  const handleAllClear = () => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      title: '',
      body: '',
    }));
  };

  return (
    <main>
      <form>
        <InputTitle setInputValue={setInputValue} inputValue={inputValue} />
        <Box>
          <label htmlFor="body">본문</label>
          <p>Be specific and imagine you’re asking a question to another person.</p>
          <Editor setInputValue={setInputValue} inputValue={inputValue} />
        </Box>
        <Flex direction="row">
          <Btn color="red" type="button" onClick={handleAllClear}>
            clear(초기화)
          </Btn>
          <Btn color="#0995ff" type="submit" onClick={handleSubmit}>
            submit(제출)
          </Btn>
        </Flex>
      </form>
    </main>
  );
};

export default AskMain;

const Btn = styled.button`
  background-color: ${(props) => props.color};
  color: rgb(255, 255, 255);
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
  margin: 10px 20px;
  font-weight: bolder;
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

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: center;
`;
