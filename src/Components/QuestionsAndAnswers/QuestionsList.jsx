import React, { useState } from 'react';
import QuestionsListItem from './QuestionsListItem.jsx';

function QuestionsList(props) {
  // const [question, updateQuestion] = useState();

  return (
    <p>
      {props.questions.map((item, index) => <QuestionsListItem item={item} key={index} />)}
    </p>
  );
}

export default QuestionsList;
