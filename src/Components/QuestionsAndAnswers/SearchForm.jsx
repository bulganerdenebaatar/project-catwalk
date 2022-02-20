import React, { useState } from 'react';

function SearchForm(props) {
  return (
  // <form onSubmit={(e) => { e.preventDefault(); props.handleSubmit(); }}>
  //   <input
  //     type="text"
  //     value={props.searchInput}
  //     placeholder="Have a question? Search for answers…"
  //     onChange={(e) => props.setSearchInput(e.target.value)}
  //   />
  //   <input type="submit" value="Search" />
  // </form>

    <form>
      <input
        type="text"
        value={props.searchInput}
        placeholder="Have a qeustion? Search for answers…"
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
