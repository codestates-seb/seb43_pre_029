import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReactQuill from 'react-quill';

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

const Answer = ({ answer, a_id, qinfo, qanswers, setQianswers }) => {
  const { q_id, m_id } = qinfo;
  const { a_content, m_name, createdAt, pic } = answer;
  const [newAnswer, setNewAnswer] = useState([]);
  const { id } = useParams();
  const [commentModal, setCommentModal] = useState(false);
  const [answerModal, setAnswerModal] = useState(false);
  const [updateValue, setUpdateValue] = useState('');
  const navigate = useNavigate();
  // console.log(answer);
  // console.log(qanswers);
  const onCheck = (a_id) => {
    axios
      .patch(`http://ec2-3-39-194-243.ap-northeast-2.compute.amazonaws.com:8080/question/edit/answer-accept/${a_id}`, {
        q_id: q_id,
        m_id: m_id,
      })
      .then((response) => {
        const newAnsweroo = qanswers.map((el) => {
          if (el.a_id === a_id) {
            console.log('a_id', a_id);
            return { ...el, check: !el.check };
          }
          return el;
        });
        setNewAnswer(newAnsweroo); // 머지때 제거해주세용
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
        <RxCountdownTimer size="20px" color="lightgrey" className="flex-item" />
        <button
          onClick={() => {
            onCheck(a_id);
          }}
        >
          {'체크'}
        </button>
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
          <Btn
            color="blue"
            onClick={() => {
              setAnswerModal((prev) => !prev);
            }}
          >
            답글 수정
          </Btn>
          {answerModal ? (
            <FlexColumn>
              <form>
                <ReactQuill
                  className="my-quill"
                  value={updateValue}
                  onChange={(content) => {
                    setUpdateValue(content);
                  }}
                  theme="snow"
                  placeholder="질문할 내용을 상세히 적어주세요."
                />
                <Btn
                  color="black"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    axios
                      .patch(`/answer/edit/${a_id}`, {
                        a_id: a_id,
                        q_id: q_id,
                        m_id: m_id,
                        a_content: updateValue,
                      })
                      .then((res) => {
                        navigate(0);
                      });
                  }}
                >
                  수정!
                </Btn>
              </form>
            </FlexColumn>
          ) : null}
          <Btn
            color="red"
            onClick={() => {
              axios.delete(`http://localhost:4000/question/${id}`);
            }}
          >
            답글 삭제
          </Btn>
        </Flex>
        <Flex>
          <Btn
            color="green"
            onClick={() => {
              setCommentModal(!commentModal);
            }}
          >
            Add a comment
          </Btn>
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
`;

const CommentInputStyle = styled.div`
  input {
    width: 85%;
    border: 2px solid lightgray;
    padding: 6px;
  }
  button {
    width: 12%;
    padding: 5px;
    border: 2px solid lightgray;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
