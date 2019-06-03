import React from 'react';
import renderer from 'react-test-renderer';
import {initialState} from "../../reducer/reducer.js";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app.jsx';

describe(`App render - test`, () => {
  it(`Render App`, () => {
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const tree = renderer
      .create(<Provider store={store}>
        <App/>
      </Provider>,
      {
        createNodeMock: (element) => element
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


