import React, { useState } from 'react';
import QuestionModal from '../QuestionModal.jsx';
import { Helpful, Report } from '../HelpfulOrReport.jsx';
import { dateFormatter } from '../../util/util.js';

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
        {' | '}
        {' '}
        Name:
        {' '}
        {props.asker_name}
        {' '}
        {' | '}
        {' '}
        {dateFormatter(props.question_date)}
        {' '}
        {' | '}
        {' '}
        Helpful?
        {' '}
        <Helpful
          path="/qa/questions"
          id={props.question_id}
          handleRefresh={props.handleRefresh}
        />
        ({props.question_helpfulness})
        {' '}
        {' | '}
        {' '}
        <Report
          path="/qa/questions"
          id={props.question_id}
          handleRefresh={props.handleRefresh}
        />
        {' '}
        {' | '}
        {' '}
        <button
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add Answer
        </button>
        {showModal
        && (
        <QuestionModal
          id={props.question_id}
          onDismiss={() => setShowModal(false)}
          route={`/shopdata/qa/questions/${props.question_id}/answers`}
        />
        )}
      </p>
      {props.answers.length !== 0
        ? props.answers.slice(0, answerDisplay).map((answer, index) => (
          <p key={index}>
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
              {answerDisplay < props.answers.length ? 'See More Answers'
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
