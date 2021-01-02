import React from 'react';
import PropTypes from 'prop-types';
import { Comment as SUIComment } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const CommentGroup = props => (
  <SUIComment.Group
    as={props.as}
    className={`commentGroup ${props.className}`}
    collapsed={props.collapsed}
    content={props.content}
    minimal={props.minimal}
    size={props.size}
    style={props.style}
    threaded={props.threaded}
  >
    {props.children}
  </SUIComment.Group>
);

CommentGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  collapsed: PropTypes.bool,
  content: PropTypes.node,
  minimal: PropTypes.bool,
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  style: stylePropType,
  threaded: PropTypes.bool
};

export default CommentGroup;
