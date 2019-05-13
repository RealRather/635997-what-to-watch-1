import React, {PureComponent} from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      moviesCardsNames,
      onClick
    } = this.props;
    return <MainPage
      movieNames = {moviesCardsNames}
      onClick={onClick}
    />;
  }
}

App.propTypes = {
  moviesCardsNames: PropTypes.arrayOf(PropTypes.shape({
    filmName: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })),
  onClick: PropTypes.func
};

export default App;
