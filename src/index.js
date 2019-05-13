import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';

const init = (movies) => {
  ReactDOM.render(
      <App
        moviesCardsNames = {movies}
      />,
      document.querySelector(`#root`)
  );
};

init(films);
