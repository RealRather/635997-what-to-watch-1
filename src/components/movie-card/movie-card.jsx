import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const MovieCard = ((props) => {
  const {
    movie,
    onClick,
    onFocus
  } = props;
  return <article className="small-movie-card catalog__movies-card" onFocus={()=>onFocus()}>
    <VideoPlayer movie={movie}/>
    <h3 className="small-movie-card__title" onClick={() => onClick(movie.id)}>
      <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
    </h3>
  </article>;
});

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    preview: PropTypes.shape({
      mp4: PropTypes.string.isRequired,
      webm: PropTypes.string.isRequired
    }),
  }),
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired
};

export default MovieCard;
