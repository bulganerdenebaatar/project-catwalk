import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const scaleEnds = {
  Fit: ['tight', 'perfect', 'loose'],
  Length: ['short', 'perfect', 'long'],
  Comfort: ['poor', 'perfect'],
  Quality: ['poor', 'great'],
  Size: ['too small', 'perfect', 'too big'],
  Width: ['too narrow', 'perfect', 'too wide'],
};

const Scale = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const Bar = styled.div`
//   display: flex;

//   .hr-line {
//     width: 100%
//     height: 25px;
//     position: relative;
//     margin: 5px;
//     backgound-color: grey;
//   }

//   .
// `;

function CharacteristicBar({ name, value }) {
  const percentile = Math.floor(((value - 1) / 4) * 100);
  return (
    <div className="characteristic-bar">
      <div>{name}</div>
      <div>{percentile}</div>
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
