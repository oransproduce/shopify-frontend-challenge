import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import Search from './Search';
import SearchResults from './SearchResults';
import Nominations from './Nominations';

const App = () => {
  const [searchTerm, updateSearchTerm] = useState('');
  return (
    <Box>
      <Grid justify="center" container direction="row" spacing={3}>
        <Grid item xs={8}>
          <Typography align="center" variant="h1">The Shoppies</Typography>
        </Grid>
        <Grid item xs={8}>
          <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} />
        </Grid>
        <Grid container item xs={8} spacing={3}>
          <Grid item xs={12} md={6}>
            <SearchResults />
          </Grid>
          <Grid item xs={12} md={6}>
            <Nominations />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
