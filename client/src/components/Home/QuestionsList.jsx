import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestItem from './QuestItem';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://ec2-3-39-194-243.ap-northeast-2.compute.amazonaws.com:8080/question?page=1').then((response) => {
      setQuestions(response.data.data);
      console.log(response.data.data);
    });
  }, []);

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
