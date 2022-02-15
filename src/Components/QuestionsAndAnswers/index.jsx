import React from 'react';
import styled from 'styled-components';
import QuestionsList from './QuestionsList.jsx';
import SearchForm from './SearchForm.jsx';

const QandAStyle = styled.div`
  border: 3px solid rgba(52, 168, 152, 66);
  border-radius: 20px;
  min-height: 490px;
  max-width: 85%;
  margin: 20px;
  padding: 20px;
`;

const exampleData = {
  product_id: '40345',
  results: [
    {
      question_id: 426169,
      question_body: 'Is this the first quesiton?',
      question_date: '2021-09-20T00:00:00.000Z',
      asker_name: 'me',
      question_helpfulness: 6,
      reported: false,
      answers: {
        3989827: {
          id: 3989827,
          body: 'yes',
          date: '2021-09-20T00:00:00.000Z',
          answerer_name: 'Seller',
          helpfulness: 6,
          photos: [],
        },
      },
    },
    {
      question_id: 553730,
      question_body: 'nope!',
      question_date: '2021-11-18T00:00:00.000Z',
      asker_name: 'bye',
      question_helpfulness: 1,
      reported: false,
      answers: {},
    },
    {
      question_id: 553729,
      question_body: 'hello',
      question_date: '2021-11-18T00:00:00.000Z',
      asker_name: 'bye',
      question_helpfulness: 0,
      reported: false,
      answers: {},
    },
  ],
};

function QuestionsAndAnswers() {
  const questions = [];

  exampleData.results.forEach((item) => (
    questions.push(item.question_body)
  ));

  const answers = [];

  exampleData.results.forEach((item) => (
    // item.answers !== undefined ? answers.push(item.answers.body) : null
    answers.push(item.answers.body)
  ));

  return (
    <QandAStyle className="questionsAndAnswers">
      <SearchForm />
      <QuestionsList questions={questions} answers={answers} />
    </QandAStyle>
  );
}

export default QuestionsAndAnswers;
