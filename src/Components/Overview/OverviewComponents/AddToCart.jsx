import React, { useContext, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { OverviewContext } from '../index.jsx';

const AddStyle = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 50%;
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

const parseStock = (stock) => {
  const parsedStock = {};
  Object.entries(stock).forEach((sku) => {
    parsedStock[sku[1].size] = {
      quantity: sku[1].quantity,
      sku: sku[0],
    };
  });
  return parsedStock;
};

function AddToCart() {
  const stock = useContext(OverviewContext).currentStyleSelection.skus;
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const [sizeSelection, setSizeSelection] = useState('Select Size');
  const [stockQuantity, setStockQuantity] = useState(0);
  const [quantitySelection, setQuantitySelection] = useState(1);

  const handleSizeSelect = (event) => {
    setSizeSelection(event.target.value);
    const sizesAndStock = parseStock(stock);
    setStockQuantity(sizesAndStock[event.target.value].quantity);
  };

  const handleQuantitySelect = (event) => {
    setQuantitySelection(event.target.value);
  };

  const handleAddToCart = () => {
    console.log('cart updated');
    const sizesAndStock = parseStock(stock);
    axios.post('shopdata/cart', {
      sku: sizesAndStock[sizeSelection].sku,
      quantity: quantitySelection,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AddStyle>
      <select value={sizeSelection} onChange={handleSizeSelect}>
        {(sizeSelection === 'Select Size')
          ? <option label="--Select Size--" /> : null}
        {sizes.map((size) => <option label={size} value={size} />)}
      </select>
      {stockQuantity
        ? (
          <select value={quantitySelection} onChange={handleQuantitySelect}>
            {quantities.map((number) => {
              if (number <= stockQuantity && number <= 15) {
                return <option label={number} value={number} />;
              }
              return null;
            })}
          </select>
        )
        : null}
      <button type="button" onClick={handleAddToCart}>Add To Cart</button>
    </AddStyle>
  );
}

export default AddToCart;
