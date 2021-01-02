import React from 'react';
import PropTypes from 'prop-types';
import { Player } from 'video-react';
import stylePropType from 'react-style-proptype';
import './video-react.css';

const VideoPlayer = props => (
  <Player
    aspectRatio={props.aspectRatio}
    autoPlay={props.autoPlay}
    className={`videoPlayer ${props.className}`}
    fluid={props.fluid}
    height={props.height}
    muted={props.muted}
    playsInline={props.playsInline}
    poster={props.poster}
    preload={props.preload}
    src={props.src}
    startTime={props.startTime}
    style={props.style}
    width={props.width}
  />
);

VideoPlayer.propTypes = {
  aspectRatio: PropTypes.string,
  autoPlay: PropTypes.bool,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  height: PropTypes.number,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  poster: PropTypes.string,
  preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
  src: PropTypes.string,
  startTime: PropTypes.number,
  style: stylePropType,
  width: PropTypes.number
};

export default VideoPlayer;
