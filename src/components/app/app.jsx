import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {
    moviesCardsNames,
    onClick
  } = props;
  return <MainPage
    movieNames = {moviesCardsNames}
    onClick={onClick}
  />;
};

App.propTypes = {
  moviesCardsNames: PropTypes.array,
  onClick: PropTypes.func
};

export default App;
