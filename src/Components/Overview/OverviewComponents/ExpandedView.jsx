import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { standardBGColor } from '../../../styles.js';

const Modal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 14;
  background-color: rgba(20, 20, 20, 0.5);

  img {
    position: relative;
    border: thick solid rgba(150, 200, 255, 0.8);
    border-radius: 10px;
    max-height: 900px;
    max-width: 900px;
  }

  :hover {
    cursor: zoom-out;
  }
`;

const Arrow = styled.span`
  font-family: FontAwesome;
  font-size: 10em;
  margin: 10px;
  width: 0.75em;
  position: relative;
`;

let indexTracker = 0;

function ExpandedView({
  currentImage,
  handleClick,
  thumbs,
  setCurrentMainImage,
  currentMainImageIndex,
}) {

  const [thumbnailIndexRange, setThumbnailIndexRange] = useState([0, 7]);

  const LeftArrow = styled(Arrow)`
    content: &#Xf104;
    color: rgba(80, 190, 250, ${currentMainImageIndex ? 1 : 0});
    text-shadow: 3px 3px rgba(20, 20, 20, ${currentMainImageIndex ? 0.8 : 0});
    left: 60px;
    :hover {
      cursor:${currentMainImageIndex ? 'pointer' : 'auto'};
      color: ${currentMainImageIndex ? 'gold' : 'none'};
      text-shadow: 1px 1px rgba(70, 70, 20, ${currentMainImageIndex ? 0.8 : 0});
    }
    :active {
      color: ${currentMainImageIndex ? 'rgb(170, 140, 20)' : 'none'};
    }
  `;

  const RightArrow = styled(Arrow)`
    content: &#Xf105;
    color: rgba(80, 190, 250, ${(currentMainImageIndex === thumbs.length - 1) ? 0 : 1});
    text-shadow: 3px 3px rgba(20, 20, 20, ${(currentMainImageIndex === thumbs.length - 1) ? 0 : 0.8});
    :hover {
      cursor: ${(currentMainImageIndex === thumbs.length - 1) ? 'auto' : 'pointer'};
      color: ${(currentMainImageIndex === thumbs.length - 1) ? 'none' : 'gold'};
      text-shadow: 1px 1px rgba(70, 70, 20, ${(currentMainImageIndex === thumbs.length - 1) ? 0 : 0.8});
    }
    :active {
      color: ${(currentMainImageIndex === thumbs.length - 1) ? 'none' : 'rgb(170, 140, 20)'};
    }
  `;

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

  if (currentMainImageIndex === thumbnailIndexRange[1]) {
    setThumbnailIndexRange([thumbnailIndexRange[0] + 1, thumbnailIndexRange[1] + 1]);
    indexTracker += 1;
  }

  if (currentMainImageIndex === thumbnailIndexRange[0] && currentMainImageIndex > 0) {
    setThumbnailIndexRange([thumbnailIndexRange[0] - 1, thumbnailIndexRange[1] - 1]);
    indexTracker -= 1;
  }

  return (
    <Modal onClick={handleClick}>
      <LeftArrow
        data-analytics-id="scroll-left"
        className="fas fa-angle-left fa-lg"
        type="button"
        value="left"
        onClick={() => handleArrowClick('prev')}
      />
      <img src={currentImage} alt="expanded view enabled" />
      <RightArrow
        data-analytics-id="scroll-right"
        className="fas fa-angle-right fa-lg"
        type="button"
        value="right"
        onClick={() => handleArrowClick('next')}
      />
    </Modal>
  );
}

ExpandedView.propTypes = {
  currentImage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  thumbs: PropTypes.isRequired,
  setCurrentMainImage: PropTypes.func.isRequired,
  currentMainImageIndex: PropTypes.number.isRequired,
};

export default ExpandedView;
