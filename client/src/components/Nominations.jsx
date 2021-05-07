import React from 'react';
import MovieList from './MovieList';

const Nominations = ({ nominations, removeMovie }) => (
  <MovieList title="Nominations" movieList={nominations} movieAction={removeMovie} buttonText="Remove" />
);

export default Nominations;
