import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Container } from '@material-ui/core';

import searchMovies from '../../../lib/search';
import Search from './Search';
import SearchResults from './SearchResults';
import Nominations from './Nominations';

const App = () => {
  const [searchTerm, updateSearchTerm] = useState('');
  const [resultList, updateResultsList] = useState([]);
  const [nominations, updateNominations] = useState([]);
  const [idDictionary, updateDictionary] = useState({});
  const [doneNominating, updateDone] = useState(false);
  const getNominated = () => {
    axios.get('/movies').then(({ data }) => {
      console.log(data);
      data.forEach((movie) => {
        idDictionary[movie.imdbID] = true;
      });
      if (data.length >= 5) {
        updateDone(true);
      } else {
        updateDone(false);
      }
      updateDictionary(idDictionary);
      updateNominations(data);
    }).catch((err) => {
      console.log(err);
    });
  };

  const nominateMovie = (Title, Year, imdbID) => {
    axios.post('/movies', { Title, Year, imdbID }).then(() => {
      getNominated();
    }).catch((err) => console.log(err));
  };

  const removeMovie = (title, year, imdbID) => {
    axios.delete(`/movies/${imdbID}`).then(() => {
      getNominated();
    }).catch((err) => console.log(err));
  };

  useEffect(() => {
    searchMovies(searchTerm, updateResultsList);
  }, [searchTerm]);

  useEffect(() => {
    getNominated();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid justify="center" container direction="row" spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" variant="h1">The Shoppies</Typography>
        </Grid>
        <Grid item xs={8}>
          <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} md={6}>
            <SearchResults
              idDictionary={idDictionary}
              nominateMovie={nominateMovie}
              resultList={resultList}
              doneNominating={doneNominating}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Nominations nominations={nominations} removeMovie={removeMovie} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
