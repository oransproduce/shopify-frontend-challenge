import React, { useState, useEffect} from 'react';
import { Grid, Box } from '@material-ui/core';
import Search from './Search';

const App = () => {
  const [searchTerm, updateSearchTerm] = useState('');
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
