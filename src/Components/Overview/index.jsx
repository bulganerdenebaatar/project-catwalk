import React, {
  createContext,
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductInformation from './OverviewComponents/ProductInfo.jsx';
import Styles from './OverviewComponents/Styles.jsx';
import MainView from './OverviewComponents/MainView.jsx';
import AddToCart from './OverviewComponents/AddToCart.jsx';
import { colors, styles } from '../../styles.js';
import { GlobalContext } from '../../App.jsx';

const OverviewStyle = styled.div`
  ${styles.Standard};
  display: grid;
  grid-template-columns: 60% 40%;
  height: fit-content(1em);
`;

const ProductInteractions = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 0.3fr);
  width: fit-content;
`;

export const OverviewContext = createContext({});

function Overview() {
  const { productId } = useContext(GlobalContext);
  const [currentMainImage, setCurrentMainImage] = useState('');
  const [currentStyleSelection, setCurrentStyleSelection] = useState([]);
  const [currentImageThumbs, setCurrentImageThumbs] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyleId, setCurrentStyleId] = useState(0);

  useEffect(() => {
    axios.get(`shopdata/products/${productId}`)
      .then((res) => {
        setProductInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`shopdata/products/${productId}/styles`)
      .then((res) => {
        const initStyle = res.data.results[0];
        setProductStyles(res.data.results);
        setCurrentStyleSelection(initStyle);
        setCurrentImageThumbs(initStyle.photos);
        setCurrentMainImage([initStyle.photos[0].url, 0]);

        res.data.results.forEach((style, index) => {
          if (style.style_id === currentStyleId) {
            if (index === 0) setCurrentStyleId(style.style_id);
            setCurrentStyleSelection(style);
            setCurrentImageThumbs(style.photos);
            setCurrentMainImage([style.photos[0].url, 0]);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <OverviewStyle id="overview" data-testid="overview">
      <OverviewContext.Provider value={{
        productInfo,
        setProductInfo,
        productStyles,
        setProductStyles,
        currentMainImage,
        setCurrentMainImage,
        currentStyleSelection,
        setCurrentStyleSelection,
        currentImageThumbs,
        setCurrentImageThumbs,
        currentStyleId,
        setCurrentStyleId,
      }}
      >
        <MainView />
        <ProductInteractions>
          <ProductInformation />
          <Styles />
          <AddToCart />
        </ProductInteractions>
      </OverviewContext.Provider>
    </OverviewStyle>
  );
}

export default Overview;
