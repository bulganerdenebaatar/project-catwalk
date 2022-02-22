import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

  :hover {
    cursor: zoom-out;
  }
`;

function ExpandedView({ currentImage, handleClick }) {
  return (
    <Modal onClick={handleClick}>
      <img src={currentImage} alt="expanded view enabled" />
    </Modal>
  );
}

ExpandedView.propTypes = {
  currentImage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ExpandedView;
