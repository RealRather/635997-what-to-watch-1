import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

it(`Render App`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<App
      moviesCardsNames={[`Thanos`, `Loki`, `Thor`]}
      onClick = {clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
