import React from 'react';
import QuestionsListItem from './QuestionsListItem.jsx';

function QuestionsList(props) {
  return (
    <p>
      {props.questions.slice(0, props.displayNumber).map((item, index) =>
        <QuestionsListItem question={item.question} answers={item.answers} key={index} />)}
    </p>
  );
}

export default QuestionsList;
