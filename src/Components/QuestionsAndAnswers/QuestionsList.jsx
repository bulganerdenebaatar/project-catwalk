import React, { useState } from 'react';
import QuestionsListItem from './QuestionsListItem.jsx';

function QuestionsList(props) {
  // const [question, updateQuestion] = useState();

  return (
    <p>
      {props.questions.map((item, index) => <QuestionsListItem question={item.question} answers={item.answers} key={index} />)}
    </p>
  );
}

export default QuestionsList;
