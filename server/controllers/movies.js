const express = require('express');
const { add, getAll, remove } = require('../models/movies.js');

const router = express.Router();

router.get('/', (req, res) => {
  getAll((err, movies) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(movies);
    }
  });
});

router.post('/', (req, res) => {
  add(req.body, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(201).json(result);
    }
  });
});

router.delete('/:imdbID', (req, res) => {
  const { imdbID } = req.params;
  remove(imdbID, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;
