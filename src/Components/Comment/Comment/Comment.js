import React from 'react';
import PropTypes from 'prop-types';
import { Comment as SUIComment } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Comment = props => (
  <SUIComment
    as={props.as}
    className={`comment ${props.className}`}
    collapsed={props.collapsed}
    content={props.content}
    style={props.style}
  >
    {props.children}
  </SUIComment>
);

Comment.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  collapsed: PropTypes.bool,
  content: PropTypes.node,
  style: stylePropType
};

export default Comment;
