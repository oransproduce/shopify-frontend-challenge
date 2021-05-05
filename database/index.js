const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
});
const Movies = mongoose.model('Movies', movieSchema);

module.exports = {
  mongoose,
  Movies,
};
