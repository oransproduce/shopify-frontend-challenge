const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  imdbID: String,
});
const Movies = mongoose.model('Movies', movieSchema);

module.exports = {
  mongoose,
  Movies,
};
