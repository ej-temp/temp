import React from 'react';
import PropTypes from 'prop-types';

export default function HighAndLowTemp({ lowTemp, highTemp }) {
  return (
    <>
      <h2>low</h2>
      <h4>location: {lowTemp.name}</h4>
      <h5>Temperature: {lowTemp.temp}</h5>
      <h2>high</h2>
      <h4>location: {highTemp.name}</h4>
      <h5>Temperature: {highTemp.temp}</h5>
    </>
  );
}

HighAndLowTemp.propTypes = {
  lowTemp: PropTypes.shape({
    name: PropTypes.string.isRequired,
    temp: PropTypes.number
  }).isRequired,
  highTemp: PropTypes.shape({
    name: PropTypes.string.isRequired,
    temp: PropTypes.number
  }).isRequired
};
