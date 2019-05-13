import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {
  constructor() {
    super();
  }
  render() {
    const {
      movieNames,
      onClick
    } = this.props;

    return movieNames.map((it, i) => <MovieCard
      onClick={onClick} key={i} movieName={it}
    />);
  }
}

MoviesList.propTypes = {
  movieNames: PropTypes.arrayOf(PropTypes.shape({
    filmName: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  })),
  onClick: PropTypes.func
};

export default MoviesList;
