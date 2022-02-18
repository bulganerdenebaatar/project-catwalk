import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { GlobalContext } from '../../App.jsx';

import ListBehavior from './ListBehavior.jsx';



function RelatedProductsList() {
  const { productId, setProductId } = useContext(GlobalContext);
  const [relatedIDs, setRelatedIDs] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [relatedProductsItem, setRelatedProductsItem] = useState([]);

  useEffect(() => {
    axios.get(`shopdata/products/${productId}/related`)
      .then((res) => {
        setRelatedIDs(res.data);
      })
      .catch((err) => (
        console.log('errr', err)
      ));
  }, [productId]);

  useEffect(() => {
    console.log('in related: ', relatedIDs);
    relatedIDs.forEach((ID, index) => {
      console.log('per round: ', ID);
      axios.get(`shopdata/products/${ID}/styles`)
        .then((res) => {
          console.log('IN style req: ', res.data);
          setRelatedProducts((prevIDs) => [...prevIDs, res.data]);
        })
        .catch((err) => (
          console.log('errr', err)
        ));
      axios.get(`shopdata/products/${ID}`)
        .then((res) => {
          console.log('IN PRODOO req: ', res.data);
          setRelatedProductsItem((prevIDs) => [...prevIDs, res.data]);
        })
        .catch((err) => (
          console.log('errr', err)
        ));
    });
  }, [relatedIDs]);

  return (
    <>
      <p>{relatedIDs}</p>
      <p>{console.log(relatedProducts, 'rendered')}</p>
      <ListBehavior relatedProducts={relatedProducts} relatedProductsItem={relatedProductsItem} />
    </>
  );
}

export default RelatedProductsList;

