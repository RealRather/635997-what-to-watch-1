import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';

it(`Render MovieCard`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MovieCard
      movieName={
        {
          filmName: `Fantastic Beasts: The Crimes of Grindelwald`,
          src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
        }
      }
      onClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
