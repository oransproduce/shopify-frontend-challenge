/* eslint-disable no-undef */
const request = require('supertest');
const mongoose = require('mongoose');
const { Movies } = require('../database');

const app = require('../server/app.js');

beforeEach((done) => {
  mongoose.connect('mongodb://localhost:27017/JestDB',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done());
  });
});

describe('POST /movies', () => {
  it('responds with correct status code and json', (done) => {
    request(app)
      .post('/movies')
      .send(
        {
          title: 'Lord of the Rings',
          year: '2001',
        },
      )
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
describe('GET /movies', () => {
  it('responds with a movie that has been posted with status code 200', async (done) => {
    const movie = {
      title: 'Lord of the Rings',
      year: 2001,
    };
    await Movies.create(movie);
    request(app)
      .get('/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        const { title, year } = response.body[0];
        expect(title).toBe(movie.title);
        expect(year).toBe(movie.year);
        done();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  });
});
describe('DELETE /movies', () => {
  it('deletes posted movie and subsequent get returns nothing', async (done) => {
    const movie = {
      title: 'Lord of the Rings',
      year: 2001,
    };
    const { _id } = await Movies.create(movie);
    await Movies.deleteMany({ _id });
    request(app)
      .get('/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveLength(0);
        done();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  });
});
