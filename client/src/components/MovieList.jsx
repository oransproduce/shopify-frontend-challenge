import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import Movie from './Movie';

const MovieList = (props) => {
  const {
    movieList, movieAction, buttonText, idDictionary, doneNominating,
  } = props;
  return (
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
  );
};

export default MovieList;

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      Poster: PropTypes.string,
      Title: PropTypes.string,
      Type: PropTypes.string,
      Year: PropTypes.string,
      imdbId: PropTypes.string,
    }),
  ),
  idDictionary: PropTypes.objectOf(PropTypes.bool),
  movieAction: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  doneNominating: PropTypes.bool,
};

MovieList.defaultProps = {
  movieList: [],
  idDictionary: {},
  doneNominating: false,
};
