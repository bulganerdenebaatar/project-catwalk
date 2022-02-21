import React from 'react';
import QuestionsListItem from './QuestionsListItem.jsx';
import ExpandButton from './ExpandButton.jsx';
import AskForm from './AskForm.jsx';

function QuestionsList(props) {
  return (
    <div>
      <p>
        {props.questions.slice(0, props.displayNumber).map((item, index) =>
          <QuestionsListItem question={item.question} answers={item.answers} key={index} />)}
      </p>
      <p>
        <ExpandButton
          questions={props.questions}
          displayNumber={props.displayNumber}
          updateDisplayNumber={props.updateDisplayNumber}
          collapseDisplayNumber={props.collapseDisplayNumber}
        />
        {' '}
        <AskForm />
      </p>
    </div>
  );
}

export default QuestionsList;
