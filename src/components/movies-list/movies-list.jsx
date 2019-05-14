import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const MoviesList = ((props) => {
  const {
    movieNames,
    onClick,
    _onFocusHandler
  } = props;
  return movieNames.map((it) => <MovieCard onClick={onClick} key={it.id} movieName={it} _onFocusHandler={_onFocusHandler}/>);
});

MoviesList.propTypes = {
  movieNames: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })),
  onClick: PropTypes.func,
  _onFocusHandler: PropTypes.func
};

export default MoviesList;
