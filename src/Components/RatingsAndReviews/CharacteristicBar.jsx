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
  margin-bottom: 10px;
  font-size: 80%;
`;

const IconInsideBar = styled.div`
  display: flex
  align-items: center;
  position: relative;
  width: 100%;
  height 16px;
  background-color: grey;
  background-color: rgba(149, 141, 153, 0.6);
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
`;

const PostionedIcon = styled.span`
  height: 16px;
  width: 16px;
  border-radius: 25%;
  background-color: purple;
  position: absolute;
  left: ${(props) => props.percentile}%;
  transform:translate(-50%, 0%);
`;

// ${(props) => props.percentile}

function CharacteristicBar({ name, value }) {
  const percentile = Math.floor(((value - 1) / 4) * 100);
  return (
    <div data-analytics-id="characteristic-bar" className="characteristic-bar">
      <div>{name}</div>
      <IconInsideBar>
        <PostionedIcon percentile={percentile} />
      </IconInsideBar>
      {/* <div>{percentile}</div> */}
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
