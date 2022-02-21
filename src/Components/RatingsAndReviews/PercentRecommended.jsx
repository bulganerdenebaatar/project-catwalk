import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { GlobalContext } from '../../App.jsx';

const PercRec = Styled.p`
  font-size: 85%;
`;

function PercentRecommended() {
  const { recommended } = useContext(GlobalContext).ratingsData;
  const rec = Number(recommended.true);
  const total = Number(recommended.false) + rec;
  const percent = Math.floor((rec / total) * 100);
  return (
    <PercRec>
      { percent }
      % of reviews recommend this product
    </PercRec>
  );
}

export default PercentRecommended;
