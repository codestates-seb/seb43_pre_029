import React from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import { useState, useMemo } from 'react';
import axios from 'axios';
import 'quill/dist/quill.snow.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';

const QInfoValue = ({ qinfo }) => {
  const modules = useMemo(() => {
    return {
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
  }, []);

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

  const { value, date, username, title, body, id } = qinfo;
  const [commentModal, setCommentModal] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [questionModal, setQuestionModal] = useState(false);
  const [updateQuestionInput, setUpdateQuestionInput] = useState('');

  const handleDelete = (id) => (e) => {
    axios.delete(`http://localhost:4000/question/${id}`);
  };

  const openQuestionModal = (e) => {
    setQuestionModal((prev) => !prev);
  };

  return (
    <div>
      <ReactQuill
        value={value}
        readOnly={true}
        modules={{
          toolbar: false,
        }}
      />
      <ProfilLine>
        <Profil>
          <div className="date">{date}</div>
          <User>
            <div className="pic">
              <img
                src="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                alt="profile"
              />
            </div>
            <div>
              <a href={'/'}>{username}</a>
            </div>
          </User>
        </Profil>
      </ProfilLine>
      <Btn color="blue" onClick={openQuestionModal}>
        {questionModal ? '닫기' : '수정'}
      </Btn>
      {questionModal ? (
        <div>
          <ReactQuill
            className="my-quill"
            value={updateQuestionInput}
            onChange={(content) => {
              setUpdateQuestionInput(content);
            }}
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="수정할 내용을 적어주세요."
          />
          <Btn
            color="skyblue"
            onClick={(e) => {
              e.preventDefault();
              axios.patch(`http://localhost:4000/question/${id}`, {
                q_content: updateQuestionInput,
              });
            }}
          >
            제출
          </Btn>
        </div>
      ) : null}
      <br />
      <Btn color="red" onClick={handleDelete(id)}>
        삭제하기
      </Btn>
      <div
        className="addComment"
        onClick={() => {
          setCommentModal(!commentModal);
        }}
      >
        Add a comment
      </div>
      {commentModal ? (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .post('http://localhost:4000/comment', { m_id: 0, q_id: id, c_comment: commentInput })
                .then((res) => {
                  alert('댓글 등록 완료하였습니다!');
                  setCommentInput('');
                })
                .catch((err) => {
                  console.error(err);
                  alert('댓글 등록에 실패하였습니다.');
                });
            }}
          >
            <input
              type="text"
              value={commentInput}
              onChange={(e) => {
                setCommentInput(e.target.value);
              }}
            />
            <button type="submit">제출</button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default QInfoValue;

const ProfilLine = styled.div`
  margin-top: 50px;
  width: 720px;
  display: flex;
  justify-content: end;
`;

const Profil = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  font-size: 13px;
  padding: 5px 6px 7px 7px;
  border-radius: 3px;
  background-color: rgb(217, 234, 247);

  .date {
    width: 187px;
    height: 16px;
    margin: 1px 0px 4px;
    color: rgb(10, 115, 124);
  }
`;

const User = styled.div`
  display: flex;

  .pic {
    margin-right: 8px;
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  a {
    color: rgb(0, 116, 204);
    text-decoration: none;
  }
`;

const Btn = styled.button`
  background-color: ${(props) => props.color};
  color: rgb(255, 255, 255);
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
  margin: 10px 20px;
  font-weight: bolder;
  cursor: pointer;
`;
