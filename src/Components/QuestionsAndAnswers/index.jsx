import React from 'react';
import styled from 'styled-components';
import { colors, styles } from '../../styles.js';

const QandAStyle = styled.div`
  ${styles.Standard};
`;

function QuestionsAndAnswers() {
  return (
    <QandAStyle className="questionsAndAnswers">QUESTIONS AND ANSWERS WILL GO HERE</QandAStyle>
  );
}

export default QuestionsAndAnswers;
