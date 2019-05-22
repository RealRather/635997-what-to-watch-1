import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

const TIME_DELAY = 1000;
let timerId;

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideoPlaying: false
    };
  }

  render() {
    const {
      movie,
      clickHandler,
    } = this.props;

    return <article className="small-movie-card catalog__movies-card" onPointerEnter={() => this._movieFocusHandler()} onMouseLeave={() => this._movieLeaveHandler()}>
      <VideoPlayer movie={movie} isVideoPlaying={this.state.isVideoPlaying}/>
      <h3 className="small-movie-card__title" onClick={() => clickHandler(movie.id)}>
        <a className="small-movie-card__link" href="movie-page.html">{movie.name}</a>
      </h3>
    </article>;
  }

  _movieFocusHandler() {
    this.props.focusHandler();
    timerId = setTimeout(() => {
      this.setState({
        isVideoPlaying: true,
      });
    },
    TIME_DELAY);
  }

  _movieLeaveHandler() {
    clearTimeout(timerId);
    this.setState({
      isVideoPlaying: false
    });
    this.props.leaveHandler();
  }
}

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
  leaveHandler: PropTypes.func.isRequired
};

export default MovieCard;
