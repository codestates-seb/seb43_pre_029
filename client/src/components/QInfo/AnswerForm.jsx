import React, { useState } from 'react';
import styled from 'styled-components';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import axios from 'axios';

const CodeBlock = Quill.import('formats/code-block');

Quill.register(CodeBlock, true);

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'code-block'],
  ],
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'color',
  'background',
  'align',
  'list',
  'bullet',
  'link',
  'image',
  'code-block',
];

export default function AnswerForm({ id }) {
  const [answerInputValue, setAnswerInputValue] = useState('');

  const handleAnswerChange = (editorContent) => {
    setAnswerInputValue(editorContent); //! value -> content 로 수정할듯
    console.log('🌈 content : ', answerInputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://ec2-3-39-194-243.ap-northeast-2.compute.amazonaws.com:8080/answer', {
        q_id: 1,
        m_id: 1,
        a_content: answerInputValue,
      })
      .then((res) => {
        alert('답변 등록 완료하였습니다!');
        setAnswerInputValue('');
      })
      .catch((err) => {
        console.error(err);
        alert('답변 등록에 실패하였습니다.');
      });
  };

  return (
    <form>
      <div
        onClick={() => {
          // fetch('http://ec2-3-39-194-243.ap-northeast-2.compute.amazonaws.com:8080/member/check-password', {
          //   email: 'user@gmail.com',
          //   password: 'a1234567',
          // }).then((res) => console.log(res));
          axios
            .get(
              'http://ec2-3-39-194-243.ap-northeast-2.compute.amazonaws.com:8080/member/check-password',
              JSON.stringify({
                email: 'user@gmail.com',
                password: 'a1234567',
              }),
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              },
            )
            .then((res) => console.log(res));
        }}
      >
        겟
      </div>
      <AnswerInput>
        <ReactQuill
          className="my-quill"
          value={answerInputValue}
          onChange={handleAnswerChange}
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="좋은 답변을 적어주세요. 😊"
        />
      </AnswerInput>
      <PostBtn onClick={handleSubmit}>Post Your Answer</PostBtn>
    </form>
  );
}

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
