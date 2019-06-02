import {reducer, initialState, getAllGenres, filterMoviesByGenre} from './reducer.js';
import films from '../mocks/films.js';

describe(`Reducer render - test`, () => {
  it(`Default genres render`, () => {
    expect(reducer(initialState, {})).toEqual({
      moviesFilterByGenre: films,
      genreType: initialState.genreType,
      genres: getAllGenres(films),
    });
  });
});

it(`Selecting genre type`, () => {
  expect(reducer(initialState, {
    type: `GET_GENRE_TYPE`,
    payload: `Crime`
  })).toEqual({
    genreType: `Crime`,
    moviesFilterByGenre: films,
    genres: getAllGenres(films)
  });
});

it(`Filtering movies by genre`, () => {
  expect(reducer(initialState, {
    type: `FILTER_MOVIES_BY_GENRE`,
    payload: `Dramas`
  })).toEqual({
    moviesFilterByGenre: filterMoviesByGenre(`Dramas`),
    genreType: initialState.genreType,
    genres: getAllGenres(films)
  });
});
