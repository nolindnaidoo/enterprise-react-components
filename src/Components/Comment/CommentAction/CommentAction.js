import React from 'react';
import PropTypes from 'prop-types';
import { Comment as SUIComment } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const CommentAction = props => (
  <SUIComment.Action
    active={props.active}
    as={props.as}
    className={`commentAction ${props.className}`}
    content={props.content}
    style={props.style}
  >
    {props.children}
  </SUIComment.Action>
);

CommentAction.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  style: stylePropType
};

export default CommentAction;
