import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class MovieCard extends PureComponent {
  constructor() {
    super();
  }
  render() {
    const {
      movieName,
      onClick
    } = this.props;
    return <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button">Play</button>
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={`${movieName}`} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title" onClick={onClick}>
        <a className="small-movie-card__link" href="movie-page.html">{movieName}</a>
      </h3>
    </article>;
  }
}

MovieCard.propTypes = {
  movieName: PropTypes.shape({
    filmName: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func
};

export default MovieCard;
