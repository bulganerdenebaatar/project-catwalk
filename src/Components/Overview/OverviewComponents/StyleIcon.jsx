import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
  width: 40px;
`;

function StyleIcon(props) {
  const { thumb } = props;
  return (
    <Icon src={thumb} alt="setting up test renders" />
  );
}

export default StyleIcon;
