import React, { useState } from 'react';

function SearchForm(props) {
  return (
    <form>
      <input
        type="text"
        value={props.searchInput}
        placeholder="Have a question? Search for answers…"
        onChange={(e) => props.setSearchInput(e.target.value)}
      />
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); props.handleSubmit(); }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
