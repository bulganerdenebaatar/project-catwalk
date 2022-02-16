import React, { useState } from 'react';

function QuestionsListItem(props) {
  return (
    <div className="list-item">
      <p>
        Q: {props.question}
      </p>
      {props.answers.length !== 0
        ? props.answers.map((answer) =>
          <p>A: {answer}</p>) : <p>A: N/A</p>}
    </div>
  );
}

export default QuestionsListItem;
