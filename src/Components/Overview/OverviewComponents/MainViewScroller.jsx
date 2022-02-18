import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { styleOptions } from '../test_data/testdata.js';
import { standardBGColor } from '../../../styles.js';

const Scroller = styled.div`
  background-color: ${standardBGColor};
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  img {
    overflow: hide;
    object-fit: cover;
    :hover {
      cursor: pointer;
    }
  }
  button {
    padding: none;
    background: none;
    margin: none;
    border: none;
    :hover {
      cursor: pointer;
    }
  }
`;

function MainViewScroller({ thumbs, setCurrentMainImage }) {
  const handleClickOnThumbnail = (newImageUrl) => {
    setCurrentMainImage(newImageUrl);
  };
  return (
    <Scroller>
      {thumbs.map((image) => (
        <button type="button" onClick={() => handleClickOnThumbnail(image.url)}>
          <img
            src={image.thumbnail_url}
            alt="placeholder renders"
          />
        </button>
      ))}
    </Scroller>
  );
}

MainViewScroller.propTypes = {
  thumbs: PropTypes.isRequired,
  setCurrentMainImage: PropTypes.func.isRequired,
};

export default MainViewScroller;
