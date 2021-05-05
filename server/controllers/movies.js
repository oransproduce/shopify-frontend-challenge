const express = require('express');
const { add, getAll, remove } = require('../models/movies.js');

const router = express.Router();

router.get('/', (req, res) => {
  getAll((err, movies) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(movies);
    }
  });
});

router.post('/', (req, res) => {
  const { title, year } = req.body;
  add(title, year, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(201).json(result);
    }
  });
});

router.delete('/', (req, res) => {
  const { _id } = req.body;
  remove(_id, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
