import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { colors, styles } from '../../styles.js';
import QuestionsList from './QuestionsList.jsx';
import SearchForm from './SearchForm.jsx';
import AskForm from './AskForm.jsx';
import ExpandButton from './ExpandButton.jsx';

const QandAStyle = styled.div`
  ${styles.Standard};
`;

// const exampleData = {
//   product_id: '40345',
//   results: [
//     {
//       question_id: 426169,
//       question_body: 'Is this the first quesiton?',
//       question_date: '2021-09-20T00:00:00.000Z',
//       asker_name: 'me',
//       question_helpfulness: 6,
//       reported: false,
//       answers: {
//         3989827: {
//           id: 3989827,
//           body: 'yes',
//           date: '2021-09-20T00:00:00.000Z',
//           answerer_name: 'Seller',
//           helpfulness: 6,
//           photos: [],
//         },
//       },
//     },
//     {
//       question_id: 553730,
//       question_body: 'nope!',
//       question_date: '2021-11-18T00:00:00.000Z',
//       asker_name: 'bye',
//       question_helpfulness: 1,
//       reported: false,
//       answers: {},
//     },
//     {
//       question_id: 553729,
//       question_body: 'hello',
//       question_date: '2021-11-18T00:00:00.000Z',
//       asker_name: 'bye',
//       question_helpfulness: 0,
//       reported: false,
//       answers: {},
//     },
//   ],
// };


function QuestionsAndAnswers() {
  const [questionData, setQuestionData] = useState('');
  // change example data to empty object, use setQuestionData to make request
  // QuestionsAndAnswers would take in productID as prop
  // use prop and setQuestionData to make the request for actual data
  const [searchInput, setSearchInput] = useState('');
  const [searched, setSearched] = useState([]);
  const questions = [];
  // const searched = questions.filter((question) => question.question.includes(searchInput));

  useEffect(() => {
    axios.get('shopdata/qa/questions/?product_id=40345')
      .then((res) => {
        // console.log(res.data.results);
        setQuestionData(res.data.results);
      })
      .then((res) => {
        console.log('this is questionData', questionData);
        questionData.forEach((question) => {
          const answers = Object.values(question.answers);
          const answersBody = answers.map((answer) => answer.body);
          questions.push({ question: question.question_body, answers: answersBody });
        });
      })
      .then((res) => {
        console.log('this is questions', questions);
        setSearched(questions);
      })
      .catch((err) => (console.log('error message', err)));
  });

  // useEffect(() => {
  //   setSearched(searched);
  // });

  // .then((res) => {
  //   console.log('this is questions', questions);
  //   setSearched(questions);
  // })

  const handleSubmit = () => {
    setSearched(questions.filter((question) => question.question.includes(searchInput)));
  };

  return (
    <QandAStyle className="questionsAndAnswers">
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearched={setSearched}
        handleSubmit={handleSubmit}
      />
      <QuestionsList questions={searched} data-testid="questions-list" />
      <ExpandButton />
      <AskForm />
    </QandAStyle>
  );
}

export default QuestionsAndAnswers;
