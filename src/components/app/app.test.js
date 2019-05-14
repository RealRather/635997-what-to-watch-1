import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mocks = [
  {
    id: `11`,
    filmName: `Fantastic`,
    src: `img/fantastic.jpg`
  },
  {
    id: `22`,
    filmName: `Bohemian`,
    src: `img/bohemian.jpg`
  },
  {
    id: `33`,
    filmName: `Macbeth`,
    src: `img/macbeth.jpg`
  },
  {
    id: `44`,
    filmName: `We need to`,
    src: `img/we-need-to.jpg`
  }
];

it(`Render App`, () => {
  const {moviesCardsNames} = mocks;
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
