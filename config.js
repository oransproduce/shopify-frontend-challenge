const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  masterKey: process.env.OMDB_API_KEY,
  port: process.env.PORT,
};
