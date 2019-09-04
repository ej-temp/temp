import React from 'react';
import PropTypes from 'prop-types';
import Temp from './Temp';

export default function Temps({ temps }) {
  const tempsArr = temps.map((temp, i) => {
    return (
      <li key={i}>
        <Temp name={temp.name} temp={temp.temp} />
      </li>
    );
  });

  return (
    <ul>
      {tempsArr}
    </ul>
  );
}

Temps.propTypes = {
  temps: PropTypes.array.isRequired
};
