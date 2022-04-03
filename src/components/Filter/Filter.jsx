import React from 'react';
import PropTypes from 'prop-types';

function Filter({ value, onFilter }) {
  return (
    <label>
      <p>Find contact by name</p>
      <input type="input" name="filter" onChange={onFilter} value={value} />
    </label>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
