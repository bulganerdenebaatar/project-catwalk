import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Standard } from '../../../styles.js';
import { product, styleOptions } from '../test_data/testdata.js';
import MainViewScroller from './MainViewScroller.jsx';
import MainViewImage from './MainViewImage.jsx';
import { GlobalContext } from '../../../App.jsx';
import loading from './assets/loading.gif';

const ImageView = styled.div`
  ${Standard}
  border: 2px solid rgba(52, 168, 192, 0.8);
  border-radius: 20px;
  box-shadow: -2px 2px rgba(89, 255, 255, 0.6);
  margin-right: 20px;
  max-width: 490px;
  max-height: 490px;
  overflow: hidden;
  position: relative

  .thumbnails {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .main-view:hover {
    cursor: zoom-in;
  }
`;

function MainView() {
  const { currentStyleId, productStyles } = useContext(GlobalContext);
  const [currentStyleSelection, setCurrentStyleSelection] = useState([]);
  const [currentMainImage, setCurrentMainImage] = useState('');
  const [currentImageThumbs, setCurrentImageThumbs] = useState([]);

  useEffect(() => {
    if (productStyles.results) {
      productStyles.results.forEach((style) => {
        if (style.style_id === currentStyleId) {
          setCurrentStyleSelection(style);
          setCurrentImageThumbs(style.photos);
        }
        if (!currentMainImage) {
          setCurrentMainImage(style.photos[0].url);
        }
      });
    }
  });

  if (currentMainImage) {
    return (
      <ImageView>
        <MainViewScroller
          className="thumbnails"
          thumbs={currentImageThumbs}
          setCurrentMainImage={setCurrentMainImage}
        />
        <MainViewImage
          className="main-view"
          currentImage={currentMainImage}
        />
      </ImageView>
    );
  }

  return (
    <ImageView>
      <img src={loading} alt="loading..." />
    </ImageView>
  );
}

export default MainView;
