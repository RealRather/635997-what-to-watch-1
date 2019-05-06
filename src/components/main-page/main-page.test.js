import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page.jsx';

it(`Render MainPage`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<MainPage
      movieNames={[`Thanos`, `Loki`, `Thor`]}
      onClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
