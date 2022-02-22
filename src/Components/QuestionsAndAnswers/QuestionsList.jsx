import React from 'react';
import QuestionsListItem from './QuestionsListItem.jsx';
import ExpandButton from './ExpandButton.jsx';
import AskForm from './AskForm.jsx';

// wrap buttons in enclosing style div using display flex

function QuestionsList(props) {
  return (
    <div>
      <p>
        {props.questions.slice(0, props.displayNumber).map((item, index) => (
          <QuestionsListItem
            question={item.question}
            question_id={item.question_id}
            answers={item.answers}
            key={index}
          />
        ))}
      </p>
      {props.questions.length !== 4
        && (
          <p>
            <ExpandButton
              questions={props.questions}
              displayNumber={props.displayNumber}
              updateDisplayNumber={props.updateDisplayNumber}
              collapseDisplayNumber={props.collapseDisplayNumber}
            />
            {' '}
          </p>
        )}
      <AskForm productId={40348} />
    </div>
  );
}

export default QuestionsList;
