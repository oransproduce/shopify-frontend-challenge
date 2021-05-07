import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, List } from '@material-ui/core';
import Movie from './Movie';

const MovieList = ({ title, movieList, movieAction, buttonText, idDictionary, doneNominating }) => (
  <Paper>
    <Typography align="center" variant="h3">{title}</Typography>
    <List>
      {movieList.map((movie) => {
        const disabled = movie.imdbID in idDictionary || doneNominating;
        return (
          <Movie
            movieAction={movieAction}
            key={movie.imdbID}
            imdbID={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            buttonText={buttonText}
            disabled={disabled}
          />
        );
      })}
    </List>
  </Paper>
);

export default MovieList;

MovieList.propTypes = {
  resultList: PropTypes.array,
  idDictionary: PropTypes.object,
  movieAction: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  doneNominating: PropTypes.bool,
};

MovieList.defaultProps = {
  resultList: [],
  idDictionary: {},
  doneNominating: false,
};
