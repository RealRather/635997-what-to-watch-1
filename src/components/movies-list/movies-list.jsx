import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

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
    return movies.map((it) => <MovieCard
      movie={it}
      key={it.id}
      clickHandler={this._movieClickHandler}
      focusHandler={() => this._movieFocusHandler(it.id)}
      leaveHandler={() => this._movieLeaveHandler()}
    />);
  }

  _movieClickHandler(id) {
    return id;
  }

  _movieFocusHandler(id) {
    this.setState({
      focusMoviedId: id,
    });
  }

  _movieLeaveHandler() {
    this.setState({
      focusMoviedId: null,
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
