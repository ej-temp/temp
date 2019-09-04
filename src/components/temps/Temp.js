import React from 'react';
import PropTypes from 'prop-types';

function Temp({ name, temp }) {
  return (
    <>
      <h2>name: {name}</h2>
      <h4>Temperature: {temp}</h4>
    </>
  );
}

Temp.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
};

export default Temp;
