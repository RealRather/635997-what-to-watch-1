import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/app/app.jsx';
import films from './mocks/films.js';
import {reducer} from './reducer/reducer.js';

const store = createStore(
    reducer
);

const init = (movies) => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          moviesCards= {movies}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(films);
