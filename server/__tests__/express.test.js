/**
 * @jest-environment node
 */
/* eslint-disable no-undef */
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../app.js');

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
  const movie = {
    Title: 'Lord of the Rings',
    Year: '2001',
    imdbID: 'abcdefg',
  };
  it('responds with correct status code and json', (done) => {
    request(app)
      .post('/movies')
      .send(movie)
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
      Title: 'Lord of the Rings',
      Year: '2001',
      imdbID: 'abcdefg',
    };
    await request(app)
      .post('/movies')
      .send(movie);
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
      .catch((err) => done(err));
  });
});
describe('DELETE /movies', () => {
  it('deletes posted movie and subsequent get returns nothing', async (done) => {
    const movie = {
      Title: 'Lord of the Rings',
      Year: '2001',
      imdbID: 'abcdefg',
    };
    await request(app)
      .post('/movies')
      .send(movie);
    await request(app)
      .delete(`/movies/${movie.imdbID}`)
      .expect(204);
    await request(app)
      .get('/movies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveLength(0);
        done();
      })
      .catch((err) => done(err));
  });
});
