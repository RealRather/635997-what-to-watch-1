import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const MoviesList = ((props) => {
  const {
    movieNames,
    onClick,
    onFocus
  } = props;
  return movieNames.map((it, index)=> <MovieCard onClick={onClick} movieName={it} key={index} onFocus={onFocus}/>);
});

MoviesList.propTypes = {
  movieNames: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })),
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired
};

export default MoviesList;
