import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const init = () => {
  const ExamplesMoviesNames = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `We need to talk about Kevin`];

  ReactDOM.render(
      <App
        moviesCardsNames={ExamplesMoviesNames}
      />,
      document.querySelector(`#root`)
  );
};

init();
