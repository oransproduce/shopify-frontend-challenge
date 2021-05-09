const { mongoose } = require('../database');

const app = require('./app.js');
const { port } = require('../config');

const URL = process.env.CONNECTIONSTRING || 'mongodb://localhost/movies';
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('mongodb connection successful');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on http://localhost:${port}`);
});
