import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page.jsx';

it(`Render MainPage`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MainPage
      movieNames={
        [{
          filmName: `Fantastic`,
          src: `img/fantastic.jpg`
        },
        {
          filmName: `Bohemian`,
          src: `img/bohemian.jpg`
        },
        {
          filmName: `Macbeth`,
          src: `img/macbeth.jpg`
        },
        {
          filmName: `We need to`,
          src: `img/we-need-to.jpg`
        }]
      }
      onClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
