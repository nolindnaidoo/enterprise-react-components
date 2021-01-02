import React from 'react';
import PropTypes from 'prop-types';
import { Feed as SUIFeed } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Feed = props => (
  <SUIFeed
    as={props.as}
    className={`feed ${props.className}`}
    events={props.events}
    size={props.size}
    style={props.style}
  >
    {props.children}
  </SUIFeed>
);

Feed.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      image: PropTypes.string,
      meta: PropTypes.string,
      summary: PropTypes.string,
      extraImages: PropTypes.arrayOf(PropTypes.string),
      extraText: PropTypes.string
    })
  ),
  size: PropTypes.oneOf(['small', 'large']),
  style: stylePropType
};

export default Feed;
