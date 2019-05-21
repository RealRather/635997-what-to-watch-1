import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const MovieCard = ((props) => {
  const {
    movie,
    isVideoPlaying,
    clickHandler,
    focusHandler,
    leaveHandler
  } = props;

  return <article
    className="small-movie-card catalog__movies-card"
    onPointerEnter={() => focusHandler(movie.id)}
    onPointerLeave={() => leaveHandler()}
  >
    <VideoPlayer movie={movie} isVideoPlaying={isVideoPlaying}/>
    <h3 className="small-movie-card__title" onClick={() => clickHandler(movie.id)}>
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
  clickHandler: PropTypes.func.isRequired,
  focusHandler: PropTypes.func.isRequired,
  leaveHandler: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired
};

export default MovieCard;
