import React, {
  useState, useContext, useEffect,
} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { GlobalContext } from '../../App.jsx';
import ListBehavior from './ListBehavior.jsx';


function OutfitList() {
  const { productId, setProductId } = useContext(GlobalContext);
  const [currentProduct, setCurrentProduct] = useState({});
  const [currentProductStyle, setCurrentProductStyle] = useState([]);
  const [outfits, setOutfits] = useState(() => {
    const localOutfits = localStorage.getItem('outfits');
    return localOutfits ? JSON.parse(localOutfits) : [];
  });
  const [outfitsItem, setOutfitsItem] = useState(() => {
    const localOutfitsItem = localStorage.getItem('outfitsItem');
    return localOutfitsItem ? JSON.parse(localOutfitsItem) : [];
  });
  const [addNewOutfit, setAddNewOutfit] = useState(0);

  const passedFunction = (id) => {
    if (id > 1) {
      setOutfits(outfits.filter((item) => item.id !== id));
      setOutfitsItem(outfitsItem.filter((thing) => thing.product_id !== id.toString()));
    } else {
      setAddNewOutfit((pv) => pv + 1);
    }
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
    if (currentProduct.id && !outfits.some((e) => e.id === currentProduct.id)) {
      setOutfits((prevOutfits) => [...prevOutfits, currentProduct]);
      setOutfitsItem((prevItems) => [...prevItems, currentProductStyle]);
    }
  }, [addNewOutfit]);

  // Handles local storage
  useEffect(() => {
    localStorage.setItem('outfits', JSON.stringify(outfits));
    localStorage.setItem('outfitsItem', JSON.stringify(outfitsItem));
  }, [outfitsItem]);


  return (
    <ListBehavior
      relatedProducts={outfitsItem}
      relatedProductsItem={outfits}
      outfitPicks={1}
      addNewOutfit={passedFunction}
    />
  );

}

export default OutfitList;
