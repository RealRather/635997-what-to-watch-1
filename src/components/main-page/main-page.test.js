import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page.jsx';

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

it(`Render MainPage`, () => {
  const {movieNames} = mocks;
  const onClickHandler = jest.fn();
  const onFocusHandler = jest.fn();
  const tree = renderer
    .create(<MainPage
      movieNames={movieNames}
      onClick={onClickHandler}
      _onFocusHandler={onFocusHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
