import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestItem from './QuestItem';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://ec2-13-125-71-49.ap-northeast-2.compute.amazonaws.com:8080/question?page=1').then((response) => {
      setQuestions(response.data.data); // 여기서 무한루프 발생함..
    });
  }, []); // questions넣으면 안됨!

  return (
    <>
      <div>
        {questions.map((item) => (
          <QuestItem item={item} key={item.q_id} answer={questions.answer} />
        ))}
      </div>
    </>
  );
};

export default QuestionsList;
