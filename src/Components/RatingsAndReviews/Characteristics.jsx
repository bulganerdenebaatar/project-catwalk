import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CharacteristicBar from './CharacteristicBar.jsx';
import { GlobalContext } from '../../App.jsx';


function Characteristics() {
  const { characteristics } = useContext(GlobalContext).ratingsData;
  const characteristicsAndValues = Object.entries(characteristics);
  // tuple ['fit', {id: num, value: num}]
  return (
    <div>
      {characteristicsAndValues.map((e) => <CharacteristicBar key={e[1].id} name={e[0]} value={e[1].value} />)}
    </div>
  );
}

export default Characteristics;
