import React from 'react';
import PropTypes from 'prop-types';

function MainViewImage({ currentImage }) {
  return (
    <img src={currentImage} alt="The product currently being showcased" />
  );
}

MainViewImage.propTypes = {
  currentImage: PropTypes.string.isRequired,
};

export default MainViewImage;
