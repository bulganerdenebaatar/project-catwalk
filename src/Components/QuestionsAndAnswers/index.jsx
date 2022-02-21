import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { colors, styles } from '../../styles.js';
import { GlobalContext } from '../../App.jsx';
import QuestionsList from './QuestionsList.jsx';
import SearchForm from './SearchForm.jsx';
import AskForm from './AskForm.jsx';
import ExpandButton from './ExpandButton.jsx';

const QandAStyle = styled.div`
  ${styles.Standard};
  height: fit-content;
`;

function QuestionsAndAnswers() {
  const { productId } = useContext(GlobalContext);
  const [questionData, setQuestionData] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [selected, setSelected] = useState([]);
  const questions = [];
  const [displayNumber, setDisplayNumber] = useState(4);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'shopdata/qa/questions/',
      params: {
        count: 10,
        product_id: 40349,
      },
    })
      .then((res) => {
        // sort res.data.results on question helpfulness
        // setquestiondata to that sorted array
        // use sorted array.forEach
        const sortedArr = res.data.results.sort((a, b) => (
          b.question_helpfulness - a.question_helpfulness
        ));
        setQuestionData(sortedArr);
        console.log('this is sortedArr', sortedArr);
        sortedArr.forEach((question) => {
          const answers = Object.values(question.answers);
          const answersBody = answers.map((answer) => answer.body);
          questions.push({
            question: question.question_body,
            answers: answersBody,
          });
        });
        setSelected(questions);
        // setQuestionData(res.data.results);
        // res.data.results.forEach((question) => {
        //   const answers = Object.values(question.answers);
        //   const answersBody = answers.map((answer) => answer.body);
        //   questions.push({ question: question.question_body, answers: answersBody });
        // });
        // setSelected(questions);
      })
      .catch((err) => (console.log('error message', err)));
  }, [productId]);

  const handleSubmit = () => {
    setSelected(selected.filter((element) => element.question.includes(searchInput)));
  };

  const updateDisplayNumber = () => {
    setDisplayNumber((prev) => prev + 2);
  };

  const collapseDisplayNumber = () => {
    setDisplayNumber(4);
  };

  return (
    <QandAStyle className="questionsAndAnswers">
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearched={setSelected}
        handleSubmit={handleSubmit}
      />
      <QuestionsList
        questions={selected}
        data-testid="questions-list"
        displayNumber={displayNumber}
        updateDisplayNumber={updateDisplayNumber}
        collapseDisplayNumber={collapseDisplayNumber}
      />
      {/* <ExpandButton updateDisplayNumber={updateDisplayNumber} /> */}
      {/* <AskForm /> */}
    </QandAStyle>
  );
}

export default QuestionsAndAnswers;
