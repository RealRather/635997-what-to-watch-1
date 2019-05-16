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
  const tree = renderer
    .create(<App
      moviesCards={mocks}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
