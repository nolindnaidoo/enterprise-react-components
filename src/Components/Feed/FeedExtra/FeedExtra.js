import React from 'react';
import PropTypes from 'prop-types';
import { Feed as SUIFeed } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FeedExtra = props => (
  <SUIFeed.Extra
    as={props.as}
    className={`feedExtra ${props.className}`}
    content={props.content}
    images={props.images}
    style={props.style}
    text={props.text}
  >
    {props.children}
  </SUIFeed.Extra>
);

FeedExtra.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  images: PropTypes.arrayOf(PropTypes.string),
  style: stylePropType,
  text: PropTypes.bool
};

export default FeedExtra;
