import React from 'react';
import PropTypes from 'prop-types';
import Temp from './Temp';
import { Link } from 'react-router-dom';

export default function Temps({ temps }) {
  const tempsArr = temps.map((temp, i) => {
    return (
      <Link to={`/${temp.id}`} key={i}>
        <li>
          <Temp name={temp.name} temp={temp.temp} />
        </li>
      </Link>
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
