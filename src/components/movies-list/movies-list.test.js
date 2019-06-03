import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from './movies-list.jsx';
import {initialState} from "../../reducer/reducer.js";

describe(`MoviesList render -test`, () => {
  it(`Render MoviesList`, () => {
    const movies = initialState.moviesFilterByGenre;
    const tree = renderer
      .create(<MoviesList
        movies={movies}
      />,
      {
        createNodeMock: (element) => element
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


