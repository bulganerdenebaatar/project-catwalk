import React from 'react';
import styled from 'styled-components';

const AddStyle = styled.div`
  button {
    background-color: pink;
    border-radius: 5px;
    font-family: inherit;
  }
  select {
    border-radius: 5px;
    background-color: pink;
  }
`;

const stock = [1, 2, 3, 4, 5, 6, 7];

function AddToCart() {
  return (
    <AddStyle>
      <select value="qty">
        {stock.map((num) => <option value={num}>{num}</option>)}
      </select>
      <button type="submit">Add To Cart</button>
    </AddStyle>
  );
}

export default AddToCart;
