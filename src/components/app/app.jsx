import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {moviesCardsNames} = props;
  return <MainPage
    movieNames = {moviesCardsNames}
  />;
};

App.propTypes = {
  moviesCardsNames: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }))
};

export default App;
