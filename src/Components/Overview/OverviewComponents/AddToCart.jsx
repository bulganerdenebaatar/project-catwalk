import React, { useContext, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { OverviewContext } from '../index.jsx';

const AddStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: inherit;
  position: relative;
  top: -20px;
  width: 40%;

  .size-and-quantity {
    flex-direction: row;
    select {
      margin-left: 5px;
      width: min-content;
    }
  }

`;

const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

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
  const [sizeSelection, setSizeSelection] = useState('Select Size');
  const [stockQuantity, setStockQuantity] = useState(0);
  const [quantitySelection, setQuantitySelection] = useState(1);

  const handleSizeSelect = (event) => {
    const sizesAndStock = parseStock(stock);
    setSizeSelection(event.target.value);
    setStockQuantity(sizesAndStock[event.target.value].quantity);
  };

  const handleQuantitySelect = (event) => {
    setQuantitySelection(event.target.value);
  };

  const handleAddToCart = () => {
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
      <div className="size-and-quantity">
        <select value={sizeSelection} onChange={handleSizeSelect}>
          {(sizeSelection === 'Select Size')
            ? <option label="Size" /> : null}
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
      </div>
      <button type="button" onClick={handleAddToCart}>Add To Cart</button>
    </AddStyle>
  );
}

export default AddToCart;
