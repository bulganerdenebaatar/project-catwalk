import React, { useState } from 'react';

function SearchForm(props) {
  return (
    <form onSubmit={(e) => {e.preventDefault(); props.handleSubmit();}}>
      <input type="text" value={props.searchInput} placeholder='type to search' onChange={(e) => props.setSearchInput(e.target.value)} />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchForm;
