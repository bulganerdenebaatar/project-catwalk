import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const scaleEnds = {
  Fit: ['tight', 'perfect', 'loose'],
  Length: ['short', 'perfect', 'long'],
  Comfort: ['poor', 'perfect'],
  Quality: ['poor', 'great'],
  Size: ['too small', 'perfect', 'too big'],
};

const Scale = styled.div`
  display: flex;
  justify-content: space-between;
`;

function CharacteristicBar({ name, value }) {
  return (
    <div className="characteristic-bar">
      <div>{name}</div>
      <div>{value}</div>
      <Scale className="scale-ends">
        {scaleEnds[name].map((scale) => <div>{scale}</div>)}
      </Scale>
    </div>
  );
}

CharacteristicBar.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default CharacteristicBar;
