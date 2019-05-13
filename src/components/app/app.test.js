import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`Render App`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<App
      moviesCardsNames={
        [{
          filmName: `Fantastic Beasts: The Crimes of Grindelwald`,
          src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
        },
        {
          filmName: `Bohemian Rhapsody`,
          src: `img/bohemian-rhapsody.jpg`
        }]
      }
      onClick = {clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
