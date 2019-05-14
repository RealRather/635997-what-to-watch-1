import React, {PureComponent} from 'react';
import MainPage from '../main-page/main-page.jsx';
import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {isFocus: false};
    this._onFocusHandler = this._onFocusHandler.bind(this);
  }

  _onFocusHandler() {
    this.setState((currentState) => ({
      isFocus: !currentState.isFocus
    }));
  }
  render() {
    const {
      moviesCardsNames,
      onClick
    } = this.props;
    return <MainPage
      movieNames = {moviesCardsNames}
      onClick={onClick}
      _onFocusHandler={this._onFocusHandler}
    />;
  }
}

App.propTypes = {
  moviesCardsNames: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })),
  onClick: PropTypes.func,
  _onFocusHandler: PropTypes.func
};

export default App;
