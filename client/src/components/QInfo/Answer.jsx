import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import { ImCheckmark } from 'react-icons/im';

import { GoTriangleUp, GoTriangleDown, BsBookmark, RxCountdownTimer } from '../Icon';

const AnswerMain = styled.div`
  display: flex;
  margin: 24px 16px;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgb(227 230 232);
  .answerMain {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .addComment {
      color: gray;
      font-size: 13px;
    }
  }
`;
const AswSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  button,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    margin: 3px;
    padding: 0px;
    background-color: transparent;
  }
`;
const ProfilLine = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
`;
const Profil = styled.div`
  width: 187px;
  height: 54px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 5px 6px 7px 7px;
  font-size: 13px;
  .date {
    width: 187px;
    height: 16px;
    margin: 1px 0px 4px;
    color: rgb(106 115 124);
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
    color: rgb(0 116 204);
    text-decoration: none;
  }
`;

const Answer = ({ answer }) => {
  const { a_content, m_name, createdAt, m_id, q_id, accepted, a_id } = answer;
  const [newAnswer, setNewAnswer] = useState(accepted);
  const [commentModal, setCommentModal] = useState(false);
  const [answerModal, setAnswerModal] = useState(false);
  const [updateValue, setUpdateValue] = useState('');
  const navigate = useNavigate();
  const onCheck = (a_id) => {
    console.log(a_id);
    setNewAnswer(!newAnswer);
    axios
      .patch(`/question/edit/answer-accept/${a_id}`, {
        q_id: q_id,
        m_id: m_id,
      })
      .catch((err) => console.log(Error));
  };

  return (
    <AnswerMain>
      <AswSide>
        <GoTriangleUp size="40px" color="lightgrey" className="flex-item" />
        <div>0</div>
        <GoTriangleDown size="40px" color="lightgrey" className="flex-item" />
        <BsBookmark size="20px" color="lightgrey" className="flex-item" />
        <button onClick={() => onCheck(a_id)}>
          {newAnswer ? <ImCheckmark size="40px" color="rgb(47 111 68)" /> : <ImCheckmark size="40px" color="gray" />}
        </button>
        <RxCountdownTimer size="20px" color="lightgrey" className="flex-item" />
      </AswSide>
      <div className="answerMain">
        <ReactQuill
          className="my-quill"
          value={a_content}
          readOnly={true}
          modules={{
            toolbar: false,
          }}
        />
        <ProfilLine>
          <Profil>
            <div className="date">{createdAt}</div>
            <User>
              <div className="pic">
                <img src={answer.pic} alt="profile" />
              </div>
              <div>
                <a href={'/'}>{m_name}</a>
              </div>
            </User>
          </Profil>
        </ProfilLine>
        <Flex>
          {answerModal ? (
            <div className="quill">
              <FlexColumn>
                <ReactQuill />
              </FlexColumn>
            </div>
          ) : null}
          <Btn
            className="answerBtn"
            color="skyblue"
            onClick={() => {
              setAnswerModal((prev) => !prev);
            }}
          >
            답글 수정
          </Btn>
          <Btn
            className="answerBtn"
            color="tomato"
            onClick={() => {
              axios.delete(`http://ec2-13-125-71-49.ap-northeast-2.compute.amazonaws.com:8080/answer`, {
                data: {
                  a_id: a_id,
                  m_id: m_id,
                },
              });
            }}
          >
            답글 삭제
          </Btn>
        </Flex>
        <Flex>
          <div className="addComment">
            <Btn
              className="addBtn"
              color="green"
              onClick={() => {
                setCommentModal(!commentModal);
              }}
            >
              Add a comment
            </Btn>
          </div>
        </Flex>
        {commentModal ? (
          <div>
            <CommentInputStyle>
              <form>
                <input type="text" placeholder="댓글을 적어주세요." />
                <button type="submit">확인</button>
              </form>
            </CommentInputStyle>
          </div>
        ) : null}
      </div>
    </AnswerMain>
  );
};
export default Answer;

const Btn = styled.button`
  display: block;
  background-color: ${(props) => props.color};
  color: rgb(255, 255, 255);
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
  margin: 5px 5px;
  font-weight: bolder;
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  justify-content: end;
  .quill {
    height: 150px;
    width: 580px;
    margin-bottom: 30px;
    padding-bottom: 20px;
  }
  .addComment {
    width: 100%;
    display: flex;
  }
  .answerBtn {
    display: flex;
    align-items: center;
    height: 24px;
    background-color: ${(props) => props.color};
    padding: 3px 5px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 6px;
    color: white;
  }
  .addBtn {
    display: flex;
    align-items: center;
    font-size: 12px;
    height: 24px;
    margin-left: 0px;
  }
`;

const CommentInputStyle = styled.div`
  form {
    display: flex;
    justify-content: center;
  }
  input {
    width: 92%;
    border: 2px solid lightgray;
    padding: 6px;
    border-radius: 3px;
  }
  button {
    margin-left: 3px;
    width: 8%;
    padding: 5px;
    border: 2px solid lightgray;
    border-radius: 3px;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
