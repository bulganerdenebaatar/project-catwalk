import React, {
  useState, useContext, useEffect, createContext,
} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { GlobalContext } from '../../App.jsx';

import ListBehavior from './ListBehavior.jsx';

// export const OutfitContext = createContext(0);

function OutfitList() {
  const { productId, setProductId } = useContext(GlobalContext);
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductStyle, setCurrentProductStyle] = useState([]);
  const [outfits, setOutfits] = useState([]);
  const [outfitsItem, setOutfitsItem] = useState([]);
  const [addNewOutfit, setAddNewOutfit] = useState(0);

  const passedFunction = () => {
    setAddNewOutfit((pv) => pv + 1);
  };

  // Get current product and style
  useEffect(() => {
    axios.get(`shopdata/products/${productId}`)
      .then((res) => {
        setCurrentProduct(res.data);
        return axios.get(`shopdata/products/${productId}/styles`)
          .then((response) => setCurrentProductStyle(response.data))
          .catch((error) => (console.log('err', error)));
      })
      .catch((err) => (
        console.log('errr', err)
      ));
  }, [productId]);

  // Adds new outfit to outfits
  useEffect(() => {
    setOutfits((prevOutfits) => [...prevOutfits, currentProduct]);
    setOutfitsItem((prevItems) => [...prevItems, currentProductStyle]);
  }, [addNewOutfit]);
  // listens to add click listener


  return (
    <>
      <ListBehavior
        relatedProducts={outfits}
        relatedPorductsItem={outfitsItem}
        outfitPicks={1}
        addNewOutfit={passedFunction}
      />
      <p>{console.log('inside OutfitList; passedFunction: ', passedFunction)}</p>
    </>
  );

}

export default OutfitList;

// have to resize things, get click working (maybe use context), star - compare model, clean up
