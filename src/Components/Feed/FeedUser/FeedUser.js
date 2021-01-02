import React from 'react';
import PropTypes from 'prop-types';
import { Feed as SUIFeed } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FeedUser = props => (
  <SUIFeed.User
    as={props.as}
    className={`feedUser ${props.className}`}
    content={props.content}
    style={props.style}
  >
    {props.children}
  </SUIFeed.User>
);

FeedUser.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  style: stylePropType
};

export default FeedUser;
