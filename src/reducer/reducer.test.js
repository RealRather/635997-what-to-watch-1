import {reducer, getAllGenres} from './reducer.js';

const mock = [
  {
    id: `1`,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: {
      mp4: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      webm: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    genre: `Kids & Family`,
  },
  {
    id: `2`,
    name: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    preview: {
      mp4: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      webm: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    genre: `Dramas`,
  },
  {
    id: `3`,
    name: `Macbeth`,
    src: `img/macbeth.jpg`,
    preview: {
      mp4: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      webm: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    },
    genre: `Crime`,
  },
];

const initialState = {
  moviesFilterByGenre: mock,
  genreType: `All genres`,
  genres: getAllGenres(mock),
};

describe(`Reducer render - test`, () => {
  it(`Default render render`, () => {
    expect(reducer(initialState, {})).toEqual({
      moviesFilterByGenre: mock,
      genreType: `All genres`,
      genres: [`All genres`, `Kids & Family`, `Dramas`, `Crime`],
    });
  });
});

it(`Selecting genre type`, () => {
  expect(reducer(initialState, {
    type: `GET_GENRE_TYPE`,
    payload: `Crime`
  })).toEqual({
    genreType: `Crime`,
    moviesFilterByGenre: mock,
    genres: [`All genres`, `Kids & Family`, `Dramas`, `Crime`]
  });
});
