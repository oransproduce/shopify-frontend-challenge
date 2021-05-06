import React from 'react';
import { TextField } from '@material-ui/core';

const Search = ({ searchTerm, updateSearchTerm }) => {
  const handleChange = (e) => {
    updateSearchTerm(e.target.value);
  };
  return (
    <TextField size="large" label="Search field" type="search" value={searchTerm} onChange={handleChange} />
  );
};

export default Search;
