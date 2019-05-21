import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const TIME_DELAY = 1000;
let timerId = ``;

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focusMovieId: null
    };

    this._movieClickHandler = this._movieClickHandler.bind(this);
    this._movieFocusHandler = this._movieFocusHandler.bind(this);
  }

  render() {
    const {movies} = this.props;
    const {focusMovieId} = this.state;
    return movies.map((it) => <MovieCard
      movie={it}
      key={it.id}
      isVideoPlaying={it.id === focusMovieId}
      clickHandler={this._movieClickHandler}
      focusHandler={this._movieFocusHandler}
      leaveHandler={this._movieLeaveHandler}
    />);
  }

  _movieClickHandler(id) {
    return id;
  }

  _movieFocusHandler(id) {
    timerId = setTimeout(() => {
      this.setState({
        focusMovieId: id
      });
    },
    TIME_DELAY);
  }

  _movieLeaveHandler() {
    clearTimeout(timerId);
    this.setState({
      focusMovieId: null
    });
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    preview: PropTypes.shape({
      mp4: PropTypes.string.isRequired,
      webm: PropTypes.string.isRequired
    }),
  }))
};

export default MoviesList;
