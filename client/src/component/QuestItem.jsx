import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemList = styled.div`
  width: 800px;
  height: 120px;
  display: flex;
  border-bottom: 1px solid gray;
  .A {
    /* border: 1px solid;  */
    width: 23em;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    justify-content: space-evenly;
    align-items: end;
    padding: 30px 30px 40px 0px;
    div {
      padding-bottom: 10px;
      font-size: 13px;
    }
  }
  .B {
    /* border: 1px solid red; */
    width: 80em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 5px;
    a {
      text-decoration-line: none;
      color: #2897ff;
    }
    .info {
      display: flex;
      justify-content: end;
      padding-bottom: 20px;
      padding-right: 20px;
      font-size: 15px;
    }
    .user {
      color: #0848bf;
      padding-right: 15px;
    }
  }
`;

const QuestItem = ({ item, questions, setQuestions }) => {
  const { id, question, username, date } = item;

  return (
    <ItemList>
      <div className="A">
        <div>0 votes</div>
        <div>0 answers</div>
        <div>2 views</div>
      </div>
      <div className="B">
        {/* <div className="text">{question}</div> */}
        <Link to={`/question/${id}`} item={item} questions={questions} setQuestions={setQuestions}>
          {question}
        </Link>
        <div className="info">
          <div className="user">{username}</div>
          <div className="date">{date}</div>
        </div>
      </div>
    </ItemList>
  );
};

export default QuestItem;
