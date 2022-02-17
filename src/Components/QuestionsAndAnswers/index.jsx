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
`;

function QuestionsAndAnswers() {
  const { productId } = useContext(GlobalContext);
  // console.log('this is productId', productId);
  const [questionData, setQuestionData] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [selected, setSelected] = useState([]);
  const questions = [];
  // change example data to empty object, use setQuestionData to make request
  // QuestionsAndAnswers would take in productID as prop
  // use prop and setQuestionData to make the request for actual data

  useEffect(() => {
    console.log('this is productId', productId);
    // axios.get(`shopdata/qa/questions/?product_id=${productId}`)
    axios.get(`shopdata/qa/questions/?product_id=${40345}`)
      .then((res) => {
        // console.log('this is res.data', res.data);
        // console.log('this is res', res);
        setQuestionData(res.data.results);
        // console.log('this is questionData', questionData);
        res.data.results.forEach((question) => {
          const answers = Object.values(question.answers);
          const answersBody = answers.map((answer) => answer.body);
          questions.push({ question: question.question_body, answers: answersBody });
        });
        console.log('this is questions', questions);
        setSelected(questions);
      })
      .catch((err) => (console.log('error message', err)));
  }, [productId]);

  // useEffect(() => {
  //   setSelected(selected);
  // });

  const handleSubmit = () => {
    setSelected(selected.filter((element) => element.question.includes(searchInput)));
  };

  return (
    <QandAStyle className="questionsAndAnswers">
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearched={setSelected}
        handleSubmit={handleSubmit}
      />
      <QuestionsList questions={selected} data-testid="questions-list" />
      <ExpandButton />
      <AskForm />
    </QandAStyle>
  );
}

export default QuestionsAndAnswers;
