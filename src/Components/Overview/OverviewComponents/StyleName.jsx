import React from 'react';
import styled from 'styled-components';

const Style = styled.button`
  border: thin solid black;
  width: fit-content;
  height: 70px;
`;

function StyleIcon({ thumb }) {
  return (
    <Style>{thumb}</Style>
  );
}

export default StyleIcon;
