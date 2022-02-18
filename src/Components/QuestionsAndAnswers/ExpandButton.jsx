import React from 'react';

function ExpandButton(props) {
  return (
    <button type="button" onClick={props.updateDisplayNumber}>
      Show More
    </button>
  );
}

export default ExpandButton;
