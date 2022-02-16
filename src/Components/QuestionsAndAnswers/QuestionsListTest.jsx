import React from 'react';

import {
  render,
  screen,
} from '@testing-library/react';

import '@testing-library/jest-dom';

import QuestionsList from './QuestionsList.jsx';

test('Questions List can render', () => {
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
  render(<QuestionsList questions={exampleData} />);
  expect(screen.getByTestId('questions-list')).toBeTruthy();
});
