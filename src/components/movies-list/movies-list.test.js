import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

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
  }];

it(`Render MoviesList`, () => {
  const clickHandler = jest.fn();
  const focusHandler = jest.fn();
  const tree = renderer
    .create(<MoviesList
      movies={mocks}
      onClick={clickHandler}
      onFocus={focusHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


