const { Movies } = require('../../database');

module.exports = {
  add: (title, year, cb) => {
    Movies.create({ title, year }, (err, result) => {
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
  remove: (_id, cb) => {
    Movies.deleteOne({ _id }, (err, result) => {
      if (err) {
        cb(null);
      } else {
        cb(null, result);
      }
    });
  },
};
