import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../../App.jsx';

const Style = styled.button`
  background-color: pink;
  border: thin solid teal;
  cursor: pointer;
  height: 70px;
  width: fit-content;
`;


function StyleName({ thumb, styleId }) {
  const { setCurrentStyleId } = useContext(GlobalContext);
  const handleClickOnStyleName = () => {
    setCurrentStyleId(styleId);
  };
  return (
    <Style onClick={handleClickOnStyleName}>{thumb}</Style>
  );
}

StyleName.propTypes = {
  thumb: PropTypes.isRequired,
  styleId: PropTypes.number.isRequired,
};

export default StyleName;
