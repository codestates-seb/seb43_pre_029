import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestItem from './QuestItem';

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/questions').then((data) => setQuestions(data.data));
  }, []);

  return (
    <div>
      {questions.map((item) => (
        <QuestItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default QuestionsList;
