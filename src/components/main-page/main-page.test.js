import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page.jsx';

describe(`App render - test`, () => {
  it(`Render MainPage`, () => {
    const tree = renderer
      .create(<MainPage/>,
          {
            createNodeMock: (element) => element
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
