import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const SearchStyle = Styled.form`
  display: flex;
  flex-direction: row;
  height: 35px;
  bottom: -25px;

  input {
    background-color: rgba(200, 255, 255, 0.1);
    border: none;
    padding-left: 20px;
    border-radius: 50px;
    width: content-min;
    font-family: inherit;
    height: 25px;
  }
`;

function SearchForm({
  searchInput,
  setSearchInput,
  handleSubmit,
}) {
  return (
    <SearchStyle>
      <form>
        <input
          type="text"
          value={searchInput}
          placeholder="Search Questions..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); handleSubmit(); }}
        >
          Search
        </button>
      </form>
    </SearchStyle>
  );
}

SearchForm.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
