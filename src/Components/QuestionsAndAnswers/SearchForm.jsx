import React, { useState } from 'react';

function SearchForm() {
  const [input, updateInput] = useState('');

  return (
    <form>
      <input type="text" value={input} placeholder='type to search' />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchForm;
