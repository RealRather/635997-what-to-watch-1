import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page.jsx';

it(`Render MainPage`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MainPage
      movieNames={
        [{
          filmName: `Fantastic Beasts: The Crimes of Grindelwald`,
          src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
        },
        {
          filmName: `Bohemian Rhapsody`,
          src: `img/bohemian-rhapsody.jpg`
        }]
      }
      onClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
