import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Editor from './Editor.jsx';

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
  }
`;

const Btn = styled.button`
  background-color: ${(props) => (props.color ? props.color : '#0995ff')};
  color: rgb(255, 255, 255);
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
  margin-top: ${(props) => (props.top ? props.top : '0.85rem')};
  font-weight: bolder;
`;

const AskForm = () => {
  const [inputs, setInputs] = useState({
    title: '',
    detail: '',
    detail2: '',
    tag: '',
  });

  const { title, tag } = inputs; // 구조 분해

  const onChangeInput = (e) => {
    const { value, name } = e.target; // e.target에서 name과 value를 추출
    setInputs({ ...inputs, [name]: value }); // 기존의 input 객체를 복사한 뒤 name 키를 가진 값을 value로 설정
    console.log(e.target.value);
  };

  const onReset = () => {
    setInputs({
      title: '',
      detail: '',
      detail2: '',
      tag: '',
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  console.log(inputs);
  return (
    <>
      <form onSubmit={onSubmitForm}>
        <Box>
          <FlexColumn>
            <label htmlFor="title">Title</label>
            <p>Be specific and imagine you’re asking a question to another person.</p>
            <input
              name="title"
              type="text"
              placeholder="e.g is there an R function for finding the index of an element in a vector?"
              value={title}
              onChange={onChangeInput}
            />
          </FlexColumn>
          <Btn>Next</Btn>
        </Box>

        <Box>
          <label htmlFor="detail">What are the details of your problem?</label>
          <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
          <Editor name="detail" setInputs={setInputs} inputs={inputs} />
          <Btn top="3.5rem">Next</Btn>
        </Box>

        <Box>
          <label htmlFor="detail2">What did you try and what were you expecting?</label>
          <p>
            Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.
          </p>
          <Editor name="detail2" setInputs={setInputs} inputs={inputs} />
          <Btn top="3.5rem">Next</Btn>
        </Box>

        <Box>
          <FlexColumn>
            <label htmlFor="tag">Tags</label>
            <p>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
            <input name="tag" type="text" placeholder="e.g. (.net json vba)" value={tag} onChange={onChangeInput} />
          </FlexColumn>
          <Btn>Next</Btn>
        </Box>
      </form>
      <Btn color="red" onClick={onReset}>
        초기화
      </Btn>
    </>
  );
};

export default AskForm;
