import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import QuestionModal from '../QuestionModal.jsx';
import { Helpful, Report } from '../HelpfulOrReport.jsx';
import { dateFormatter } from '../../util/util.js';

const StyledQuestion = Styled.div`
  background-color: rgba(220, 152, 245, 0.3);
`;

const StyledAnswer = Styled.div`
  background-color: rgba(100, 100, 150, 0.8);
`;

const FlexColumn = Styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexTopBar = Styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 80%;
  margin: 10px;
`;

const QuestionBody = Styled.div`
  font-size: 150%;
  margin: 10px;
`;

const FlexBottomBar = Styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  font-size: 80%;
  margin: 10px;
`;

const AnswerBody = Styled.div`
  margin: 10px;
`;

const AnswerBottomBar = Styled.div`
  margin: 10px;
  font-size: 80%;
`;

const AnswerNA = Styled.div`
  margin: 10px;
`;

function QuestionsListItem({
  question,
  questionId,
  questionHelpfulness,
  questionDate,
  askerName,
  answers,
  answersId,
  answersHelpfulness,
  answersName,
  answersDate,
  handleRefresh,
}) {
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
    <StyledQuestion className="list-item">
      <FlexColumn data-analytics-id={`question ${questionId}`} className="display-column">
        <FlexTopBar className="question-topbar">
          <div>
            Name:&nbsp;{askerName}
          </div>
          <div>
            {dateFormatter(questionDate)}
          </div>
        </FlexTopBar>
        <QuestionBody className="question-body">
          Q:&nbsp;{question}
        </QuestionBody>
        <FlexBottomBar className="question-buttons">
          <div>
            Helpful?&nbsp;
            <Helpful
              path="/qa/questions"
              id={questionId}
              handleRefresh={handleRefresh}
            />
            ({questionHelpfulness})
          </div>
          <div>
            <Report
              path="/qa/questions"
              id={questionId}
              handleRefresh={handleRefresh}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={() => setShowModal(true)}
            >
              Add Answer
            </button>
            {showModal
              && (
                <QuestionModal
                  id={questionId}
                  onDismiss={() => setShowModal(false)}
                  route={`/shopdata/qa/questions/${questionId}/answers`}
                />
              )}
          </div>
        </FlexBottomBar>
      </FlexColumn>
      <StyledAnswer>
        <hr />
        {answers.length !== 0
          ? answers.slice(0, answerDisplay).map((answer, index) => (
            <AnswerBody data-analytics-id={`answer ${answersId[index]}`} key={answersId[index]}>
              A:
              {' '}
              {answer}
              {' '}
              <AnswerBottomBar>
                Name:
                {' '}
                {answersName[index]}
                {' '}
                {' | '}
                {' '}
                {dateFormatter(answersDate[index])}
                {' '}
                {' | '}
                {' '}
                Helpful?
                {' '}
                <Helpful
                  path="/qa/answers"
                  id={answersId[index]}
                  handleRefresh={handleRefresh}
                />
                ({answersHelpfulness[index]})
                {' '}
                {' | '}
                {' '}
                <Report
                  path="/qa/answers"
                  id={answersId[index]}
                  handleRefresh={handleRefresh}
                />
              </AnswerBottomBar>
            </AnswerBody>
          )) : <AnswerNA>A: N/A</AnswerNA>}
        {answers.length > 2
          ? (
            <p>
              <button
                type="button"
                onClick={answerDisplay <= answers.length - 1
                  ? updateAnswerDisplay : collapseAnswerDisplay}
              >
                {answerDisplay < answers.length ? 'See More Answers'
                  : 'Collapse Answers'}
              </button>
            </p>
          )
          : <p> </p>}
        <hr />
      </StyledAnswer>
    </StyledQuestion>
  );
}

QuestionsListItem.propTypes = {
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionHelpfulness: PropTypes.number.isRequired,
  askerName: PropTypes.string.isRequired,
  questionDate: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  answersId: PropTypes.arrayOf(PropTypes.number).isRequired,
  answersHelpfulness: PropTypes.arrayOf(PropTypes.number).isRequired,
  answersName: PropTypes.arrayOf(PropTypes.string).isRequired,
  answersDate: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleRefresh: PropTypes.func.isRequired,
};

export default QuestionsListItem;
