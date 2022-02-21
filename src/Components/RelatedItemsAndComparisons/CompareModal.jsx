import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



function CompareModal() {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button type="button"> X </button>
        <div className="title">
          <h1>Compare Modal</h1>
        </div>
        <div className="body">
          <p>stats of two items</p>
        </div>
        <div className="footer">
          <button type="button">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default CompareModal;
