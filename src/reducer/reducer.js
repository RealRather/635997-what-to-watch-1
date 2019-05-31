import films from '../mocks/films.js';

const DEFAULT_GENRE_TYPE = `All genres`;

const getAllGenres = (movies) => [DEFAULT_GENRE_TYPE, ...new Set(movies.map((movie) => movie.genre))];

const initialState = {
  moviesFilterByGenre: films,
  genreType: DEFAULT_GENRE_TYPE,
  genres: getAllGenres(films),
};

const ActionCreator = {
  getGenreType: (genre) => ({
    type: `GET_GENRE_TYPE`,
    payload: genre
  }),

  filterMoviesByGenre: (filterMovies) => ({
    type: `FILTER_MOVIES_BY_GENRE`,
    payload: filterMovies
  })
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `GET_GENRE_TYPE`:
      return Object.assign({}, state, {
        genreType: action.payload
      });
    case `FILTER_MOVIES_BY_GENRE`:
      return Object.assign({}, state, {
        moviesFilterByGenre: action.payload
      });
    default:
      return state;
  }
};

export {
  ActionCreator,
  reducer,
};

