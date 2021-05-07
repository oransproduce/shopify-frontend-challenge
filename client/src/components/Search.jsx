import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

const Search = ({ searchTerm, updateSearchTerm }) => {
  const handleChange = (e) => {
    updateSearchTerm(e.target.value);
  };
  return (
    <TextField fullWidth label="Search Field" type="search" value={searchTerm} onChange={handleChange} />
  );
};

export default Search;

Search.propTypes = {
  searchTerm: PropTypes.string,
  updateSearchTerm: PropTypes.func.isRequired,
};

Search.defaultProps = {
  searchTerm: '',
};
