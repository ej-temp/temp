import React from 'react';
import PropTypes from 'prop-types';

const DetailView = ({ name, temps }) => {
  const tempsList = temps.map(temp => (
    <li key={`${temp._id}`}>{temp.temp}</li>
  ));
  return (
    <>
      <h1>{name}</h1>
      <ul>{tempsList}</ul>
    </>
  );
};

DetailView.propTypes = {
  name: PropTypes.string.isRequired,
  temps: PropTypes.array.isRequired
};

export default DetailView;
