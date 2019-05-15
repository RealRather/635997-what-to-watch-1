import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mocks = [
  {
    id: `11`,
    name: `Fantastic`,
    src: `img/fantastic.jpg`
  },
  {
    id: `22`,
    name: `Bohemian`,
    src: `img/bohemian.jpg`
  },
  {
    id: `33`,
    name: `Macbeth`,
    src: `img/macbeth.jpg`
  },
  {
    id: `44`,
    name: `We need to`,
    src: `img/we-need-to.jpg`
  }
];

it(`Render App`, () => {
  const moviesCardsNames = mocks;
  const onClickHandler = jest.fn();
  const onFocusHandler = jest.fn();
  const tree = renderer
    .create(<App
      moviesCardsNames= {moviesCardsNames}
      onClick = {onClickHandler}
      _onFocusHandler={onFocusHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
