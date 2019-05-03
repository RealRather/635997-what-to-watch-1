import React from 'react';
import PageMain from '../pages/page-main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {moviesCardsNames} = props;
  return <PageMain
    movieNames = {moviesCardsNames}
  />;
};

App.propTypes = {
  moviesCardsNames: PropTypes.string
};

export default App;
