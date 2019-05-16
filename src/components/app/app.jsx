import React, {PureComponent} from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      moviesCardsNames
    } = this.props;
    return <MainPage
      movieNames = {moviesCardsNames}
    />;
  }
}

App.propTypes = {
  moviesCardsNames: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }))
};

export default App;
