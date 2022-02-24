import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import { colors, styles } from '../../styles.js';
import { GlobalContext } from '../../App.jsx';
import QuestionsList from './QuestionsList.jsx';
import SearchForm from './SearchForm.jsx';
import AskForm from './AskForm.jsx';
import ExpandButton from './ExpandButton.jsx';
import withAnalytics from '../../HOC/withAnalytics.jsx';

const QandAStyle = Styled.div`
  ${styles.Standard};
  height: fit-content;
`;

const Title = Styled.h3`
  font-family: inherit;
  grid-column: 1 / span 3;
  grid-row-start: 1;
`;

const CenterList = Styled.div`
  display: flex;
  alignItems: center;
  justify-content: center;
`;

function QuestionsAndAnswers() {
  const { productId } = useContext(GlobalContext);
  const [questionData, setQuestionData] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [selected, setSelected] = useState([]);
  const questions = [];

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
        // console.log('this is sortedArr', sortedArr);
        sortedArr.forEach((question) => {
          const answers = Object.values(question.answers);
          const answersBody = answers.map((answer) => answer.body);
          const answersHelpfulness = answers.map((answer) => answer.helpfulness);
          const answersName = answers.map((answer) => answer.answerer_name);
          const answersDate = answers.map((answer) => answer.date);
          const answersId = answers.map((answer) => answer.id);
          questions.push({
            question: question.question_body,
            question_id: question.question_id,
            question_helpfulness: question.question_helpfulness,
            asker_name: question.asker_name,
            question_date: question.question_date,
            answers: answersBody,
            answers_Id: answersId,
            answers_helpfulness: answersHelpfulness,
            answerer_name: answersName,
            answers_date: answersDate,
          });
        });
        // console.log('this is questions array', questions);
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

  // const handleSubmit = () => {
  //   setSelected(selected.filter((element) => element.question.includes(searchInput)));
  // };
  const handleSubmit = () => {
    const filteredSearch = selected.filter((element) => element.question.includes(searchInput));
    return (
      filteredSearch.length !== 0
        ? setSelected(filteredSearch)
        : window.alert('No Similar Questions Found')
    );
  };

  return (
    <QandAStyle className="questionsAndAnswers">
      <Title>
        Questions & Answers
      </Title>
      <SearchForm
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSubmit={handleSubmit}
      />
      <CenterList>
        <QuestionsList
          questions={selected}
          data-testid="questions-list"
          handleRefresh={handleRefresh}
        />
      </CenterList>
    </QandAStyle>
  );
}

export default withAnalytics(QuestionsAndAnswers, 'questions-and-answers');
