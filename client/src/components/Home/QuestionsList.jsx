import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestItem from './QuestItem';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://ec2-3-39-194-243.ap-northeast-2.compute.amazonaws.com:8080/question/some-page/1').then((data) => {
      console.log(data);
      setQuestions(data.data);
    });
  }, []);
  return (
    <>
      <div>
        {questions.map((item) => (
          <QuestItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default QuestionsList;
