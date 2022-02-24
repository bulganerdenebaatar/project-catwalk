import React, { useState } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import QuestionsListItem from './QuestionsListItem.jsx';
import ExpandButton from './ExpandButton.jsx';
import AskForm from './AskForm.jsx';

// wrap buttons in enclosing style div using display flex

const ScrollDiv = Styled.div`
  min-height: 40vh;
  max-height: 40vh;
  overflow-y: scroll;
`;

const CenteredPane = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
`;

function QuestionsList({ questions, handleRefresh }) {
  const [displayNumber, setDisplayNumber] = useState(4);
  const updateDisplayNumber = () => {
    setDisplayNumber((prev) => prev + 2);
  };
  const collapseDisplayNumber = () => {
    setDisplayNumber(4);
  };

  return (
    <CenteredPane>
      <ScrollDiv>
        <p>
          {questions.slice(0, displayNumber).map((item) => (
            <QuestionsListItem
              question={item.question}
              questionId={item.question_id}
              questionHelpfulness={item.question_helpfulness}
              questionDate={item.question_date}
              askerName={item.asker_name}
              answers={item.answers}
              answersId={item.answers_Id}
              answersHelpfulness={item.answers_helpfulness}
              answersName={item.answerer_name}
              answersDate={item.answers_date}
              handleRefresh={handleRefresh}
              key={item.question_id}
            />
          ))}
        </p>
        {questions.length > 4
          && (
            <p>
              <ExpandButton
                questions={questions}
                displayNumber={displayNumber}
                updateDisplayNumber={updateDisplayNumber}
                collapseDisplayNumber={collapseDisplayNumber}
              />
              {' '}
            </p>
          )}
      </ScrollDiv>
      <AskForm />
    </CenteredPane>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionHelpfulness: PropTypes.number.isRequired,
    askerName: PropTypes.string.isRequired,
    questionDate: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    answersId: PropTypes.arrayOf(PropTypes.number).isRequired,
    answersHelpfulness: PropTypes.arrayOf(PropTypes.number).isRequired,
    answererName: PropTypes.arrayOf(PropTypes.string).isRequired,
    answersDate: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  handleRefresh: PropTypes.func.isRequired,
};

export default QuestionsList;
