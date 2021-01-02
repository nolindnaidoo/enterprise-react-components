import React from 'react';
import PropTypes from 'prop-types';
import { Feed as SUIFeed } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FeedMeta = props => (
  <SUIFeed.Meta
    as={props.as}
    className={`feedMeta ${props.className}`}
    content={props.content}
    like={props.like}
    style={props.style}
  >
    {props.children}
  </SUIFeed.Meta>
);

FeedMeta.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  like: PropTypes.string,
  style: stylePropType
};

export default FeedMeta;
