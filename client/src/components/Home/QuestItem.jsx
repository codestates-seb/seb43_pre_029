import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ItemList = styled.div`
  width: 48.125rem;
  height: 5.375rem;
  display: flex;
  padding: 1rem;
  margin-right: 1.875rem;
  border-top: 0.0625rem solid rgb(227 230 232);
  .A {
    width: 6.75rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-top: 0.3125rem;
    margin: 0rem 1rem 0.25rem 0rem;
    gap: 0.375rem;
    div {
      height: 1.1875rem;
      font-size: 0.8125rem;
    }
  }
  .B {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 0.3125rem;
    a {
      text-decoration-line: none;
      color: rgb(0 116 204);
    }
    h4 {
      width: 35.6875rem;
      padding-right: 1.5rem;
      margin-top: 0px;
    }
    .info {
      width: 41.875rem;
      height: 0.75rem;
      display: flex;
      justify-content: end;
      font-size: 0.9rem;
    }
    .user {
      color: #0848bf;
      padding-right: 0.9375rem;
    }
  }
`;

const QuestItem = ({ item }) => {
  const { id, question, username, date, answers } = item;
  return (
    <ItemList>
      <div className="A">
        <div>0 votes</div>
        <div>{answers.length} answers</div>
        <div>2 views</div>
      </div>
      <div className="B">
        <h4>
          <Link to={`/question/${id}`}>{question}</Link>
        </h4>
        <div className="info">
          <div className="user">{username}</div>
          <div className="date">{date}</div>
        </div>
      </div>
    </ItemList>
  );
};

export default QuestItem;
