import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`App render - test`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(<App/>,
          {
            createNodeMock: (element) => element
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


