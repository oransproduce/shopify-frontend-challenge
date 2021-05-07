const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const moviesRouter = require('./controllers/movies.js');
const searchController = require('./controllers/search');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(bodyParser.json());
// not currently needed but included for future development
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/movies', moviesRouter);
app.get('/search', searchController);

module.exports = app;
