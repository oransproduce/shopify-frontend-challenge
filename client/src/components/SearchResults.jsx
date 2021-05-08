import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { uniqBy } from 'lodash';
import MovieList from './MovieList';

const SearchResults = (props) => {
  const {
    resultList, nominateMovie, idDictionary, doneNominating,
  } = props;
  const filteredResults = uniqBy(resultList, 'imdbID');
  return (
    <Paper>
      <Typography align="center" variant="h3">Search Results</Typography>
      <MovieList doneNominating={doneNominating} idDictionary={idDictionary} title="Search Results" movieList={filteredResults} movieAction={nominateMovie} buttonText="Nominate" />
    </Paper>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  resultList: PropTypes.arrayOf(
    PropTypes.shape({
      Poster: PropTypes.string,
      Title: PropTypes.string,
      Type: PropTypes.string,
      Year: PropTypes.string,
      imdbId: PropTypes.string,
    }),
  ).isRequired,
  nominateMovie: PropTypes.func.isRequired,
  idDictionary: PropTypes.objectOf(PropTypes.bool).isRequired,
  doneNominating: PropTypes.bool.isRequired,
};
