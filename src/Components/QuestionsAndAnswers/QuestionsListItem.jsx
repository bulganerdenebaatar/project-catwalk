import React, { useState } from 'react';
import QuestionModal from '../QuestionModal.jsx';

function QuestionsListItem(props) {
  const [answerDisplay, setAnswerDisplay] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const updateAnswerDisplay = () => {
    // console.log('more answers');
    setAnswerDisplay((prev) => prev + 10);
  };
  const collapseAnswerDisplay = () => {
    // console.log('collapse answers');
    setAnswerDisplay(2);
  };

  return (
    <div className="list-item">
      <p>
        Q:
        {' '}
        {props.question}
        {' '}
        <button
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Answer
        </button>
        {showModal && <QuestionModal id={40347} onDismiss={() => setShowModal(false)} />}
      </p>
      {props.answers.length !== 0
        ? props.answers.slice(0, answerDisplay).map((answer) => (
          <p>
            A:
            {' '}
            {answer}
          </p>
        )) : <p>A: N/A</p>}
      {props.answers.length > 2
        ? (
          <p>
            <button
              type="button"
              onClick={answerDisplay <= props.answers.length - 1
                ? updateAnswerDisplay : collapseAnswerDisplay}
            >
              {answerDisplay < props.answers.length ? 'Load More Answers'
                : 'Collapse Answers'}
            </button>
          </p>
        )
        : <p> </p>}
      <hr />
    </div>
  );
}

export default QuestionsListItem;
