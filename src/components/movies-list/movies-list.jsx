import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
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
      key={`${it.id}-movie-card`}
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
      focusMovieId: id,
    });
  }

  _movieLeaveHandler() {
    this.setState({
      focusMovieId: null,
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
    genre: PropTypes.string.isRequired,
  }))
};

const mapStateToProps = (state, ownProps) => Object.assign({},
    ownProps, {
      movies: state.moviesFilterByGenre
    });

const mapDispatchToProps = () => ({});

export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
