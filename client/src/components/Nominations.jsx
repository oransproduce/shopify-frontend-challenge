import { Paper, Typography, Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import MovieList from './MovieList';

const Nominations = ({ nominations, removeMovie }) => (
  <Paper style={{ height: '100%' }}>
    <Box p={2}>
      <Typography align="center" variant="h3">Nominations</Typography>
      <MovieList movieList={nominations} movieAction={removeMovie} buttonText="Remove" />
    </Box>
  </Paper>
);

export default Nominations;

Nominations.propTypes = {
  nominations: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Year: PropTypes.string,
      imdbID: PropTypes.string,
    }),
  ).isRequired,
  removeMovie: PropTypes.func.isRequired,
};
