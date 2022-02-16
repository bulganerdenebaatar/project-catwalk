import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Style = styled.button`
  background-color: pink;
  border: thin solid teal;
  width: fit-content;
  height: 70px;
`;

function StyleName({ thumb }) {
  return (
    <Style>{thumb}</Style>
  );
}

StyleName.propTypes = {
  thumb: PropTypes.isRequired,
};

export default StyleName;
