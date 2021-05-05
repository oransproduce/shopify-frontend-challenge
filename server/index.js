const app = require('./app.js');
const { mongoose } = require('../database');

mongoose.connect('mongodb://localhost/movies', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('mongodb connection successful');
});

const PORT = 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on http://localhost:3000');
});
