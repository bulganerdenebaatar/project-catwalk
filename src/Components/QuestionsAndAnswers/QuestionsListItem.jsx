import React, { useState } from 'react';

function QuestionsListItem(props) {
  const [answerDisplay, setAnswerDisplay] = useState(2);
  const updateAnswerDisplay = () => {
    setAnswerDisplay((prev) => prev + 10);
  };
  const collapseAnswerDisplay = () => {
    setAnswerDisplay(2);
  };

  return (
    <div className="list-item">
      <p>
        Q:
        {' '}
        {props.question}
      </p>
      {props.answers.length !== 0
        ? props.answers.slice(0, answerDisplay).map((answer) => (
          <p>
            A:
            {' '}
            {answer}
          </p>
        )) : <p>A: N/A</p>}
      {props.answers.length >= 2
        ? (
          <p>
            <button type="button"
              onClick={answerDisplay < props.answers.length - 1
                ? updateAnswerDisplay : collapseAnswerDisplay}
            >
              {answerDisplay < props.answers.length ? 'load more answers'
                : 'collapse answers'}
            </button>
          </p>
        )
        : <p> </p>}
    </div>
  );
}

export default QuestionsListItem;
