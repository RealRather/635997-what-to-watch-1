import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ((props) => {
  const {
    movieName,
    onClick,
    _onFocusHandler
  } = props;
  return <article className="small-movie-card catalog__movies-card" onFocus={_onFocusHandler}>
    <button className="small-movie-card__play-btn" type="button" onClick={onClick}>Play</button>
    <div className="small-movie-card__image">
      <img src={`${movieName.src}`} alt={`${movieName.name}`} width="280" height="175"/>
    </div>
    <h3 className="small-movie-card__title" onClick={onClick}>
      <a className="small-movie-card__link" href="movie-page.html">{movieName.name}</a>
    </h3>
  </article>;
});

MovieCard.propTypes = {
  movieName: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func,
  _onFocusHandler: PropTypes.func
};

export default MovieCard;
