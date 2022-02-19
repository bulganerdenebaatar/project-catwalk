import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Standard } from '../../../styles.js';
import { product, styleOptions } from '../test_data/testdata.js';
import MainViewScroller from './MainViewScroller.jsx';
import MainViewImage from './MainViewImage.jsx';
import { OverviewContext } from '../index.jsx';
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
  position: relative;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

function MainView() {
  const {
    currentStyleId,
    productStyles,
    currentMainImage,
    setCurrentMainImage,
    setCurrentStyleSelection,
    currentImageThumbs,
    setCurrentImageThumbs,
  } = useContext(OverviewContext);

  const index = currentMainImage[1];

  useEffect(() => {
    productStyles.forEach((style) => {
      if (style.style_id === currentStyleId) {
        setCurrentStyleSelection(style);
        setCurrentImageThumbs(style.photos);
        setCurrentMainImage([style.photos[index].url, index]);
      }
    });
  }, [currentStyleId]);

  if (currentMainImage) {
    return (
      <ImageView>
        <MainViewScroller
          thumbs={currentImageThumbs}
          setCurrentMainImage={setCurrentMainImage}
          currentMainImageIndex={currentMainImage[1]}
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
