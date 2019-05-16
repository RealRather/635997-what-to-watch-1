import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const MoviesList = ((props) => {
  const {
    movies,
    onClick,
    onFocus
  } = props;
  return movies.map((it, index)=> <MovieCard onClick={onClick} movie={it} key={index} onFocus={onFocus}/>);
});

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })),
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired
};

export default MoviesList;
