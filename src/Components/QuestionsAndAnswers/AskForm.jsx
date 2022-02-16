import React, { useState } from 'react';

function AskForm() {
  const [myQuestion, updateMyQ] = useState('');

  return (
    <button>
      Ask Question
    </button>
  );
}

export default AskForm;
