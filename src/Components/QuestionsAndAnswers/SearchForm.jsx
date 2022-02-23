import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchForm({
  searchInput,
  setSearchInput,
  handleSubmit,
}) {
  return (
    <form>
      <input
        type="text"
        value={searchInput}
        placeholder="Have a question? Search for answers…"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); handleSubmit(); }}
      >
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
