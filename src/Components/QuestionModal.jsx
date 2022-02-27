/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useContext } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalContext } from '../App.jsx';
import QuestionsListItem from './QuestionsAndAnswers/QuestionsListItem.jsx';

const modalRoot = document.getElementById('modal-root');

// Styled Components
const Modal = Styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 14;
`;
const Background = Styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 14;
`;
const Form = Styled.form`
  min-height: fit-content;
  max-height: 80vh;
  overflow-y: scroll;
  width: 50vw;
  padding: 50px;
  border-style: solid;
  border-radius: 10px;
  background: rgb(120, 100, 160);
  z-index: 15;
  display: flex;
  flex-direction: column;
`;
const FormEntry = Styled.textarea`
  resize: none;
  width: -webkit-fill-available;

  &:invalid {
    border: 2px dashed red;
  }

  &:valid {
    border: 2px solid lime;
  }
`;
const SpacedLabel = Styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 20px 0px;
`;
const HorizontalFlex = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;
const ScaleEnds = Styled.div`
  font-size: 80%;
  display: flex;
  justify-content: center;
`;
const Wrap = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function QuestionModal({
  onDismiss, id, route, handleRefresh,
}) {
  const [options, setOptions] = useState({
    product_id: id,
    name: '',
    email: '',
    body: '',
  });

  const formSubmit = () => {
    axios({
      method: 'post',
      url: route,
      data: options,
    })
      .then((res) => {
        handleRefresh();
        onDismiss();
      })
      .catch((err) => {
        alert('Submission Failed');
        console.log(err);
      });
  };

  const form = (
    <Modal>
      <Background onClick={onDismiss} />
      <Form onSubmit={(e) => formSubmit(e)}>
        <SpacedLabel className="nickname">
          Nickname:
          <FormEntry
            value={options.name}
            required
            placeholder="Example: Jackson11!"
            onChange={(e) => setOptions((p) => ({ ...p, name: e.target.value }))}
          />
          <div>For privacy resons, do not use your full name or email address</div>
        </SpacedLabel>
        <SpacedLabel className="email">
          Email:
          <FormEntry
            value={options.email}
            required
            placeholder="Example: Jackson11@Email.com"
            onChange={(e) => setOptions((p) => ({ ...p, email: e.target.value }))}
          />
          <div>For authentication reasons, you will not be emailed</div>
        </SpacedLabel>
        <SpacedLabel className="body">
          { }{route === '/shopdata/qa/questions' ? 'Question' : 'Answer'}
          <FormEntry
            value={options.body}
            required
            maxLength={1000}
            minLength={50}
            placeholder="Example: Best purchase ever!"
            onChange={(e) => setOptions((p) => ({ ...p, body: e.target.value }))}
          />
        </SpacedLabel>
        <HorizontalFlex>
          <button type="button" value="Cancel" onClick={onDismiss}>Cancel</button>
          <button type="button" value="Submit" onClick={formSubmit}>Submit</button>
        </HorizontalFlex>
      </Form>
    </Modal>
  );

  return ReactDom.createPortal(form, modalRoot);
}

QuestionModal.proptypes = {
  onDismiss: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
  handleRefresh: PropTypes.func.isRequired,
};

export default QuestionModal;
