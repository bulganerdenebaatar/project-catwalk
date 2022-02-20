import React, {
  useState, useContext, useEffect,
} from 'react';
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
    // console.log('in related: ', relatedIDs);
    relatedIDs.forEach((ID, index) => {
      // console.log('per round: ', ID, 'index: ', index);
      axios.get(`shopdata/products/${ID}/styles`)
        .then((res) => {
          // console.log('IN style req: ', res.data);
          setRelatedProducts((prevIDs) => [...prevIDs, res.data]);
        })
        .catch((err) => (
          console.log('errr', err)
        ));
      axios.get(`shopdata/products/${ID}`)
        .then((res) => {
          // console.log('IN PRODUCT ID req: ', res.data);
          setRelatedProductsItem((prevIDs) => [...prevIDs, res.data]);
        })
        .catch((err) => (
          console.log('errr', err)
        ));
    });
  }, [relatedIDs]);

  if (relatedProductsItem.length === relatedIDs.length && relatedIDs.length !== 0) {
    return (
      <div>
        {relatedProductsItem.length >= 3
          ? (
            <ListBehavior
              relatedProducts={relatedProducts}
              relatedProductsItem={relatedProductsItem}
            />
          ) : <div>{6}</div>}
      </div>
    );
  }

  return (
    <div>
      HELLO WORLD
    </div>
  );


}

export default RelatedProductsList;

// have to use useLayoutEfftect hook because of painting issues

// or check to see if relatedProductsItem is not undefined first then do something

