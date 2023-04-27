import React, { useState } from 'react';
import styled from 'styled-components';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

export default function AnswerForm({ qinfo, setQianswers, qanswers }) {
  const { q_id, m_id } = qinfo;

  const [answerInputValue, setAnswerInputValue] = useState('');

  const navigate = useNavigate();

  const handleAnswerChange = (editorContent) => {
    setAnswerInputValue(editorContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://ec2-13-125-71-49.ap-northeast-2.compute.amazonaws.com:8080/answer', {
        q_id: q_id,
        m_id: m_id,
        a_content: answerInputValue,
      })
      .then((res) => {
        alert('답변 등록 완료하였습니다!');
        setAnswerInputValue('');
        navigate(0);
      })
      .catch((err) => {
        alert('답변 등록에 실패하였습니다.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <PostBtn>Post Your Answer</PostBtn>
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
