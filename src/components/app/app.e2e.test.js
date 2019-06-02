import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {initialState} from '../../reducer/reducer.js';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Simulate connect store in App`, () =>{
  let store;
  const mockStore = configureStore();
  store = mockStore(initialState);
  const wrapper = shallow(
      <Provider store={store}>
        <App/>
      </Provider>);
  expect(wrapper.find(App).length).toEqual(1);
});
