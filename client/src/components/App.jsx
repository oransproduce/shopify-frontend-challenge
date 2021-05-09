/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid, Typography, Container, Box,
} from '@material-ui/core';

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
    <Container style={{ height: '100%' }} maxWidth="lg">
      <Typography align="center" variant="h1">The Shoppies</Typography>
      <Box mt={2} mb={3}>
        <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} />
      </Box>
      <Box style={{ height: '100%' }}>
        <Grid style={{ height: '100%' }} container spacing={3}>
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
      </Box>
      <NominationAlert open={open} setOpen={setOpen} />
    </Container>
  );
};

export default App;
