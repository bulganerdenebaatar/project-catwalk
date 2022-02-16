import React from 'react';
import PropTypes from 'prop-types';
import CharacteristicBar from './CharacteristicBar.jsx';

function Characteristics({ characteristics }) {
  const characteristicsAndValues = Object.entries(characteristics);
  // tuple ['fit', {id: num, value: num}]
  return (
    <div>
      {characteristicsAndValues.map((e) => <CharacteristicBar name={e[0]} value={e[1].value} />)}
    </div>
  );
}

Characteristics.propTypes = {
  characteristics: PropTypes.shape({
    Fit: PropTypes.shape({
      value: PropTypes.number,
    }),
    Comfort: PropTypes.shape({
      value: PropTypes.number,
    }),
  }).isRequired,
};

export default Characteristics;
