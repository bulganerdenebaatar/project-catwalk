import React from 'react';

function ExpandButton(props) {
  return (
    <button type="button" onClick={props.updateDisplayNumber}>
      More Answered Questions
    </button>
  );
}

export default ExpandButton;
