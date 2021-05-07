import React from 'react';
import { ListItem, ListItemText, Button } from '@material-ui/core';

const Movie = ({ title, year, movieAction, imdbID, buttonText, disabled }) => {
  const handleClick = () => {
    movieAction(title, year, imdbID);
  };
  return (
    <ListItem>
      <ListItemText primary={title} secondary={year} />
      <Button disabled={disabled} variant="contained" onClick={handleClick}>{buttonText}</Button>
    </ListItem>
  );
};

export default Movie;
