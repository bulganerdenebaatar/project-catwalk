import React, { useState } from 'react';
import QuestionModal from '../QuestionModal.jsx';

function AskForm() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add A Question +
      </button>
      {showModal
        && (
          <QuestionModal
            id={40348}
            onDismiss={() => setShowModal(false)}
            route="/shopdata/qa/questions"
          />
        )}
    </div>
  );
}

export default AskForm;
