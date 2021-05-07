import React from 'react';
import { uniqBy } from 'lodash';
import MovieList from './MovieList';

const SearchResults = ({ resultList, nominateMovie, idDictionary, doneNominating }) => {
  const filteredResults = uniqBy(resultList, 'imdbID');
  return (
    <MovieList doneNominating={doneNominating} idDictionary={idDictionary} title="Search Results" movieList={filteredResults} movieAction={nominateMovie} buttonText="Nominate" />
  );
};

export default SearchResults;
