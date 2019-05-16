import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

const mock = {
  id: `22`,
  name: `Bohemian`,
  src: `img/bohemian.jpg`
};

it(`Render MovieCard`, () => {
  const movieName = mock;
  const clickHandler = jest.fn();
  const focusHandler = jest.fn();
  const tree = renderer
    .create(<MovieCard
      movieName={movieName}
      onClick={clickHandler}
      onFocus={focusHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
