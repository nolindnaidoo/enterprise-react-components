import React from 'react';
import PropTypes from 'prop-types';
import { Embed as SUIEmbed } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Embed = props => (
  <SUIEmbed
    active={props.active}
    as={props.as}
    aspectRatio={props.aspectRatio}
    autoPlay={props.autoPlay}
    brandedUI={props.brandedUI}
    className={`embed ${props.className}`}
    color={props.color}
    defaultActive={props.defaultActive}
    hd={props.hd}
    icon={props.icon}
    id={props.id}
    iframe={props.iframe}
    onClick={props.onClick}
    placeholder={props.placeholder}
    source={props.source}
    style={props.style}
    url={props.url}
  />
);

Embed.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  aspectRatio: PropTypes.oneOf(['4:3', '16:9', '21:9']),
  autoPlay: PropTypes.bool,
  brandedUI: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  defaultActive: PropTypes.bool,
  hd: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string,
  iframe: PropTypes.shape({
    allowFullScreen: PropTypes.bool,
    style: stylePropType
  }),
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  source: PropTypes.oneOf(['youtube', 'vimeo']),
  style: stylePropType,
  url: PropTypes.string
};

export default Embed;
