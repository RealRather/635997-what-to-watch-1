import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ((props) => {
  const {
    movie
  } = props;

  const getSourceTags = ((preview) => {
    let sourceTypes = [];
    for (const [key, value] of Object.entries(preview)) {
      sourceTypes.push(<source key={key} src={value} type={`video/${key}`}></source>);
    }
    return sourceTypes;
  });
  return <video width="280" height="175" poster={`${movie.src}`} muted={true}>
    {getSourceTags(movie.preview)}
    {`${movie.name}`}
  </video>;
});

VideoPlayer.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    preview: PropTypes.shape({
      mp4: PropTypes.string.isRequired,
      webm: PropTypes.string.isRequired
    }),
  })
};

export default VideoPlayer;
