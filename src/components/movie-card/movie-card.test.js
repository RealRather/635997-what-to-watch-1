import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

it(`Render MovieCard`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MovieCard
      movieName={`Thanos`}
      onClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
