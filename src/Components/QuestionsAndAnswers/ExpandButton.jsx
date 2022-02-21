import React from 'react';

function ExpandButton(props) {
  console.log('this is questions props', props.questions);
  return (
    <button
      type="button"
      onClick={props.displayNumber < props.questions.length - 1
        ? props.updateDisplayNumber : props.collapseDisplayNumber}
    >
      {props.displayNumber < props.questions.length - 1
        ? 'More Answered Questions' : 'Collapse Answered Questions'}
    </button>
  );
}

export default ExpandButton;
