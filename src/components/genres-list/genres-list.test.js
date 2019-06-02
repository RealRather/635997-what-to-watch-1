import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list.jsx';
import {initialState} from "../../reducer/reducer.js";

describe(`GenresList render -test`, () =>{
  it(`Render MoviesList`, () => {
    const genreClickHandler = jest.fn();
    const genres = initialState.genres;
    const activeGenreType = initialState.genreType;
    const tree = renderer
      .create(<GenresList
        genres={genres}
        onGenreLinkClick={genreClickHandler}
        activeGenreItem={activeGenreType}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
