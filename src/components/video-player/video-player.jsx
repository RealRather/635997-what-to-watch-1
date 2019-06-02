import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isVideoPlaying: props.isVideoPlaying,
    };

    this._getSourceTags = this._getSourceTags.bind(this);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const {movie, muted} = this.props;

    return <React.Fragment>
      <video
        width="280"
        height="175"
        poster={movie.src}
        muted={muted}
        ref={this._videoRef}
      >
        {this._getSourceTags(movie.preview)}
        {movie.name}
      </video>
    </React.Fragment>;
  }

  componentDidMount() {
    const preview = this._videoRef.current;

    preview.oncanplaythrough = () => this.setState({
      isLoading: false
    });

    preview.onplay = () => this.setState({
      isVideoPlaying: true
    });

    preview.onpause = () => this.setState({
      isVideoPlaying: false
    });

    preview.ontimeupdate = () => this.setState({
      progress: preview.currentTime
    });
  }

  componentDidUpdate() {
    const preview = this._videoRef.current;

    if (this.props.isVideoPlaying) {
      preview.play();
    } else {
      preview.load();
    }
  }

  componentWillUnmount() {
    const preview = this._videoRef.current;

    preview.oncanplaythrough = null;
    preview.onplay = null;
    preview.onpause = null;
    preview.ontimeupdate = null;
    preview.src = ``;
  }
  _getSourceTags(preview) {
    let sourceTypes = [];
    for (const [key, value] of Object.entries(preview)) {
      sourceTypes.push(<source key={key} src={value} type={`video/${key}`}></source>);
    }
    return sourceTypes;
  }
}

VideoPlayer.defaultProps = {
  muted: true
};

VideoPlayer.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    preview: PropTypes.shape({
      mp4: PropTypes.string.isRequired,
      webm: PropTypes.string.isRequired
    }),
    genre: PropTypes.string.isRequired
  }),
  isVideoPlaying: PropTypes.bool.isRequired
};

export default VideoPlayer;
