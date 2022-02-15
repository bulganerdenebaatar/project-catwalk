import React, { useState } from 'react';

function QuestionsListItem(props) {
  return (
    <p>
      Q: {props.item}
    </p>
  );
}

export default QuestionsListItem;
