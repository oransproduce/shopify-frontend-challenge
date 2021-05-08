import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText, Button } from '@material-ui/core';

const Movie = (props) => {
  const {
    title, year, movieAction, imdbID, buttonText, disabled,
  } = props;
  const handleClick = () => {
    movieAction(title, year, imdbID);
  };
  return (
    <ListItem>
      <ListItemText primary={title} secondary={year} />
      <Button data-testid="movie-button" disabled={disabled} variant="contained" onClick={handleClick}>{buttonText}</Button>
    </ListItem>
  );
};

export default Movie;

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  movieAction: PropTypes.func.isRequired,
  imdbID: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
