import React, { useState } from 'react';
import styled from 'styled-components';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

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

export default function QInfoForm() {
  const [commentValue, setCommentValue] = useState({
    value: '',
  });

  const handleCommentChange = (content) => {
    setCommentValue((prevCommentValue) => ({ ...prevCommentValue, value: content }));
    console.log('🌈value : ', commentValue);
  };

  return (
    <form>
      <AnswerInput>
        <ReactQuill
          className="my-quill"
          value={commentValue.value}
          onChange={handleCommentChange}
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="좋은 댓글을 적어주세요. 😊"
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
