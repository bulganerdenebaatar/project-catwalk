import React from 'react';
import styled from 'styled-components';

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

export default StyleName;
