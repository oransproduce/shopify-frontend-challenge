const axios = require('axios');
const { masterKey } = require('../../config');

module.exports = (req, res) => {
  let { searchTerm } = req.body;
  searchTerm = searchTerm.replace(' ', '+');
  axios.get(`http://www.omdbapi.com/?apikey=${masterKey}&s=${searchTerm}`).then(({ data }) => {
    res.status(200).json(data);
  }).catch(() => {
    res.sendStatus(500);
  });
};
