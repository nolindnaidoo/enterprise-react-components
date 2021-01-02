import React from 'react';
import PropTypes from 'prop-types';
import { Feed as SUIFeed } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FeedLike = props => (
  <SUIFeed.Like
    as={props.as}
    className={`feedLike ${props.className}`}
    content={props.content}
    icon={props.icon}
    style={props.style}
  >
    {props.children}
  </SUIFeed.Like>
);

FeedLike.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  icon: PropTypes.string,
  style: stylePropType
};

export default FeedLike;
