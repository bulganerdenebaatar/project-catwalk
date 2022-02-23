import React from 'react';
import PropTypes from 'prop-types';

function ExpandButton({
  questions,
  displayNumber,
  updateDisplayNumber,
  collapseDisplayNumber,
}) {
  // console.log('this is questions props', props.questions);
  return (
    <button
      type="button"
      onClick={displayNumber < questions.length - 1
        ? updateDisplayNumber : collapseDisplayNumber}
    >
      {displayNumber < questions.length - 1
        ? 'More Answered Questions' : 'Collapse Answered Questions'}
    </button>
  );
}

ExpandButton.propTypes = {
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
  displayNumber: PropTypes.number.isRequired,
  updateDisplayNumber: PropTypes.func.isRequired,
  collapseDisplayNumber: PropTypes.func.isRequired,
};

export default ExpandButton;
