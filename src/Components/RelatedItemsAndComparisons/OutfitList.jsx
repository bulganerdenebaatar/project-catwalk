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
  const [outfits, setOutfits] = useState([]);
  const [outfitsItem, setOutfitsItem] = useState([]);
  const [addNewOutfit, setAddNewOutfit] = useState(0);

  const passedFunction = () => {
    setAddNewOutfit((pv) => pv + 1);
  };


  // Working on taking outfits off list

  // const passedFunction = (id) => {
  //   if (id > 1) {
  //     console.log('in passed func; id: ', id);
  //     for (let i = 0; i <= outfits.length; i + 1) {
  //       if (outfits[i].id === id) {
  //         console.log('inside check; outfits[i].id ', outfits[i].id, 'id', id);
  //         console.log('outfits: ', outfits[0], 'outfitsItem: ', outfitsItem[0]);
  //         const fits = outfits.splice(i, 1);
  //         const items = outfitsItem.splice(i, 1);
  //         console.log('fits, items', fits, items);
  //         setOutfits(fits);
  //         setOutfitsItem(items);
  //         console.log('AFTER SET; outfits: ', outfits, 'outfitsItem: ', outfitsItem);
  //       }
  //     }
  //   } else {
  //     console.log('adding new outfit in else statement');
  //     setAddNewOutfit((pv) => pv + 1);
  //   }
  // };




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
    if (currentProduct.id) {
      // console.log('useEFFECT: currentProduct: ', currentProduct);
      setOutfits((prevOutfits) => [...prevOutfits, currentProduct]);
      setOutfitsItem((prevItems) => [...prevItems, currentProductStyle]);
    }
  }, [addNewOutfit]);


  return (
    <>
      <ListBehavior
        relatedProducts={outfitsItem}
        relatedProductsItem={outfits}
        outfitPicks={1}
        addNewOutfit={passedFunction}
      />
      <p>{console.log('inside OutfitList return statement; outfits: ', outfits)}</p>
    </>
  );

}

export default OutfitList;

