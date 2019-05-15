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
  const onClickHandler = jest.fn();
  const onFocusHandler = jest.fn();
  const tree = renderer
    .create(<MovieCard
      movieName={movieName}
      onClick={onClickHandler}
      _onFocusHandler={onFocusHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
