/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Typography, Container } from '@material-ui/core';

import searchMovies from '../../../lib/search';
import Search from './Search';
import SearchResults from './SearchResults';
import Nominations from './Nominations';
import NominationAlert from './NominationAlert';

const App = () => {
  const [searchTerm, updateSearchTerm] = useState('');
  const [resultList, updateResultsList] = useState([]);
  const [nominations, updateNominations] = useState([]);
  const [idDictionary, updateDictionary] = useState({});
  const [doneNominating, updateDone] = useState(false);
  const [open, setOpen] = useState(false);

  const getNominated = () => {
    axios.get('/movies').then(({ data }) => {
      data.forEach((movie) => {
        idDictionary[movie.imdbID] = true;
      });
      updateDone(data.length >= 5);
      setOpen(data.length >= 5);
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
    delete idDictionary[imdbID];
    updateDictionary(idDictionary);
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
      <NominationAlert open={open} setOpen={setOpen} />
    </Container>
  );
};

export default App;
