import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { OverviewContext } from '../index.jsx';

const Style = styled.button`
  background-color: pink;
  border: thin solid teal;
  color: rgba(30, 20, 60, 0.8);
  cursor: pointer;
  height: 70px;
  width: fit-content;

  :hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: rgb(120, 100, 150);
  }

  :focus {
    border-color: rgb(70, 230, 175);
    background-color: rgb(255, 160, 180);
    color: rgb(120, 120, 240)
  }
`;


function StyleName({ thumb, styleId, setCurrentStyleName }) {
  const {
    setCurrentStyleId,
    setCurrentMainImage,
  } = useContext(OverviewContext);

  const handleClickOnStyleName = () => {
    setCurrentStyleId(styleId);
    setCurrentStyleName(thumb);
  };

  return (
    <Style onClick={handleClickOnStyleName}>{thumb}</Style>
  );
}

StyleName.propTypes = {
  thumb: PropTypes.string.isRequired,
  styleId: PropTypes.number.isRequired,
  setCurrentStyleName: PropTypes.func.isRequired,
};

export default StyleName;
