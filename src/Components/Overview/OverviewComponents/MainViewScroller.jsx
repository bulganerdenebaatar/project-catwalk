import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { styleOptions } from '../test_data/testdata.js';
import { standardBGColor } from '../../../styles.js';

const Scroller = styled.div`
  background-color: ${standardBGColor};
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  img {
    overflow: hide;
    object-fit: cover;
    .not-selected:hover {
      cursor: pointer;
    }
  }
  button {
    padding: none;
    background: none;
    margin-left: -10px;
    border: none;
    :hover {
      cursor: pointer;
    }
  }
`;

const SelectedImage = styled.img`
  filter: grayscale(90%);
  margin-left: -5px;
  overflow: hide;
  object-fit: cover;
  padding: none;
`;




function MainViewScroller({ thumbs, setCurrentMainImage, currentMainImageIndex }) {

  const LeftArrow = styled.span`
    font-family: FontAwesome;
    font-size: 2em;
    content: &#Xf104;
    top: 33%;
    bottom: 33%;
    left: 33%;
    width: 100%;
    color: rgba(100, 190, 250, ${currentMainImageIndex ? 1 : 0});
    position: relative;
    :hover {
      cursor:${currentMainImageIndex ? 'pointer' : 'auto'}
    }
  `;

  const RightArrow = styled.span`
    font-family: FontAwesome;
    font-size: 2em;
    content: &#Xf105;
    top: 33%;
    left: 20%;
    bottom: 33%;
    width: 100%;
    color: rgba(100, 190, 250, ${(currentMainImageIndex === thumbs.length - 1) ? 0 : 1});
    position: relative;
    :hover {
      cursor: ${(currentMainImageIndex === thumbs.length - 1) ? 'auto' : 'pointer'};
    }
  `;

  const handleClickOnThumbnail = (index) => {
    setCurrentMainImage([thumbs[index].url, index]);
  };

  const handleArrowClick = (direction) => {

    if (direction === 'next') {
      const nextIndex = currentMainImageIndex + 1;
      if (nextIndex === thumbs.length) return;

      setCurrentMainImage([thumbs[nextIndex].url, nextIndex]);
    }

    if (direction === 'prev') {
      const prevIndex = currentMainImageIndex - 1;
      if (prevIndex < 0) return;
      setCurrentMainImage([thumbs[prevIndex].url, prevIndex]);
    }

  };

  return (
    <Scroller>
      <LeftArrow
        className="fas fa-angle-left fa-lg"
        type="button"
        value="left"
        onClick={() => handleArrowClick('prev')}
      />
      {thumbs.map((image, index) => {
        if (currentMainImageIndex === index) {
          return (
            <SelectedImage src={image.thumbnail_url} />
          );
        }
        return (
          <button type="button" onClick={() => handleClickOnThumbnail(index)}>
            <img
              className="not-selected"
              position={index}
              src={image.thumbnail_url}
              alt="placeholder renders"
            />
          </button>
        );
      })}
      <RightArrow
        className="fas fa-angle-right fa-lg"
        type="button"
        value="right"
        onClick={() => handleArrowClick('next')}
      />
    </Scroller>
  );
}

MainViewScroller.propTypes = {
  thumbs: PropTypes.isRequired,
  setCurrentMainImage: PropTypes.func.isRequired,
  currentMainImageIndex: PropTypes.number.isRequired,
};

export default MainViewScroller;
