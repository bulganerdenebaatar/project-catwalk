import React from 'react';
import styled from 'styled-components';

const QandAStyle = styled.div`
  border: 3px solid rgba(52, 168, 152, 66);
  border-radius: 20px;
  min-height: 490px;
  max-width: 85%;
  margin: 20px;
  padding: 20px;
`;

function QuestionsAndAnswers() {
  return (
    <QandAStyle className="questionsAndAnswers">QUESTIONS AND ANSWERS WILL GO HERE</QandAStyle>
  );
}

export default QuestionsAndAnswers;
