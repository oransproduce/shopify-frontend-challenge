const { Movies } = require('../../database');

module.exports = {
  add: (movieInfo, cb) => {
    Movies.create(movieInfo, (err, result) => {
      if (err) {
        cb(err);
      } else {
        cb(null, result);
      }
    });
  },
  getAll: (cb) => {
    Movies.find({}, (err, movies) => {
      if (err) {
        cb(null);
      } else {
        cb(null, movies);
      }
    });
  },
  remove: (imdbID, cb) => {
    Movies.deleteOne({ imdbID }, (err) => {
      if (err) {
        cb(null);
      } else {
        cb(null);
      }
    });
  },
};
