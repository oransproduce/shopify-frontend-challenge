const axios = require('axios');
const { masterKey } = require('../../config');

module.exports = (req, res) => {
  let { query } = req.params;
  query = query.replace(' ', '+');
  axios.get(`http://www.omdbapi.com/?apikey=${masterKey}&s=${query}`).then(({ data }) => {
    res.status(200).json(data);
  }).catch(() => {
    res.sendStatus(500);
  });
};
