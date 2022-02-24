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
    if (relatedProducts.length !== 0 || relatedProductsItem.length !== 0) {
      setRelatedProducts([]);
      setRelatedProductsItem([]);
    }
    relatedIDs.forEach((ID, index) => {
      axios.get(`shopdata/products/${ID}/styles`)
        .then((res) => {
          setRelatedProducts((prevIDs) => [...prevIDs, res.data]);
          return axios.get(`shopdata/products/${ID}`)
            .then((response) => {
              setRelatedProductsItem((previousIDs) => [...previousIDs, response.data]);
            })
            .catch((err) => (
              console.log('errr', err)
            ));
        })
        .catch((err) => (
          console.log('errr', err)
        ));
    });
  }, [relatedIDs]);

  if (relatedProductsItem.length === relatedIDs.length && relatedIDs.length !== 0) {
    return (
      <ListBehavior
        relatedProducts={relatedProducts}
        relatedProductsItem={relatedProductsItem}
      />
    );
  }

  return (
    <div>
      HELLO WORLD
    </div>
  );

}

export default RelatedProductsList;

