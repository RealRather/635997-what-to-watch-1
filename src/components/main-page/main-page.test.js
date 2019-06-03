import React from 'react';
import renderer from 'react-test-renderer';
import {initialState} from '../../reducer/reducer.js';
import {Provider} from 'react-redux';
import MainPage from './main-page.jsx';
import configureStore from "redux-mock-store";

describe(`MainPage render - test`, () => {
  it(`Render MainPage`, () => {
    let store;
    const mockStore = configureStore();
    store = mockStore(initialState);
    const tree = renderer
      .create(
          <Provider store={store}>
            <MainPage/>
          </Provider>,
          {
            createNodeMock: (element) => element
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
