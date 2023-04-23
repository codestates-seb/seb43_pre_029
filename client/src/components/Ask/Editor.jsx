import React, { useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// 코드 블럭 추가를 위한 라이브러리들
import 'quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

// 코드 블록 모듈 등록하기
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

export default function Editor({ setInputValue, inputValue }) {
  const quillRef = useRef(null);

  /**
   *
   * @param {*} e : 텍스트 에디터에 하는 입력하는 값
   */
  const handleChange = (e) => {
    setInputValue((prev) => ({ ...inputValue, body: e }));
    console.log('body', inputValue);
  };

  return (
    <div className="container">
      <ReactQuill
        className="my-quill"
        ref={quillRef}
        inputValue={inputValue.body}
        onChange={handleChange}
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="질문할 내용을 상세히 적어주세요."
      />
    </div>
  );
}
