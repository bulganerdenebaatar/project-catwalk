import React, { useState } from 'react';

function AskForm() {
  const [myQuestion, updateMyQ] = useState('');

  return (
    <button>
      Add A Question +
    </button>
  );
}

export default AskForm;
