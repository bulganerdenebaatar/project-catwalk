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

  const sortQuestions = () => {
    axios({
      method: 'get',
      url: 'shopdata/qa/questions/',
      params: {
        count: 10,
        product_id: 40348,
      },
    })
      .then((res) => {
        const sortedArr = res.data.results.sort((a, b) => (
          b.question_helpfulness - a.question_helpfulness
        ));
        setQuestionData(sortedArr);
        console.log('this is sortedArr', sortedArr);
        sortedArr.forEach((question) => {
          const answers = Object.values(question.answers);
          const answersBody = answers.map((answer) => answer.body);
          const answersHelpfulness = answers.map((answer) => answer.helpfulness);
          questions.push({
            question: question.question_body,
            question_id: question.question_id,
            question_helpfulness: question.question_helpfulness,
            asker_name: question.asker_name,
            question_date: question.question_date,
            answers: answersBody,
          });
        });
        console.log('this is questions array', questions);
        setSelected(questions);
      })
      .catch((err) => (console.log('error message', err)));
  };

  useEffect(() => {
    sortQuestions();
  }, [productId]);

  const handleRefresh = () => {
    sortQuestions();
  };

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
        productId={productId}
        data-testid="questions-list"
        displayNumber={displayNumber}
        updateDisplayNumber={updateDisplayNumber}
        collapseDisplayNumber={collapseDisplayNumber}
        handleRefresh={handleRefresh}
      />
    </QandAStyle>
  );
}

export default QuestionsAndAnswers;
