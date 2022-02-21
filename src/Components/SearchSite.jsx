import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { colors } from '../styles.js';
import { GlobalContext } from '../App.jsx';

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  height: 30px;
  position: relative;
  bottom: -25px;

  button {
    background-color: ${colors.standardBGColor};
    border: none;
    border-radius: 5px;
    color: ${colors.standardTxtColor};
    width: content-min;

    :hover {
      background-color: ${colors.standardComponentBG};
      color: white;
    }
  }
  input {
    background-color: rgba(200, 255, 255, 0.1);
    border: none;
    padding-left: 10px;
    border-radius: 10px;
    color: ${colors.standardTxtColor};
    font-family: inherit;
  }
`;

function SearchSite() {
  const { setProductId } = useContext(GlobalContext);
  const [siteSearchInput, setSiteSearchInput] = useState('');

  const handleSearchInputChange = (e) => {
    setSiteSearchInput(e.target.value);
  };

  const handleSearchSiteClick = (e) => {
    e.preventDefault();
    axios.get('shopdata/products?count=all')
      .then((res) => {
        console.log(res.data);
        const newProduct = res.data.find((product) => product.name.toLowerCase().includes(siteSearchInput));
        if (newProduct) {
          const newId = newProduct.id;
          setProductId(newId);
        } else {
          window.alert('No Product Found');
        }
        setSiteSearchInput('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SearchBox onSubmit={handleSearchSiteClick}>
      <input placeholder="Search Site..." value={siteSearchInput} type="Search" onChange={handleSearchInputChange} />
      <button type="submit">Search</button>
    </SearchBox>
  );
}

export default SearchSite;
