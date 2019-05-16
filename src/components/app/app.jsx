import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {moviesCards} = props;
  return <MainPage
    moviesCards= {moviesCards}
  />;
};

App.propTypes = {
  moviesCards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }))
};

export default App;
