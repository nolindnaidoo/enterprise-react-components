import React from 'react';
import PropTypes from 'prop-types';
import { Comment as SUIComment } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const CommentAuthor = props => (
  <SUIComment.Author
    as={props.as}
    className={`commentAuthor ${props.className}`}
    content={props.content}
    style={props.style}
  >
    {props.children}
  </SUIComment.Author>
);

CommentAuthor.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  style: stylePropType
};

export default CommentAuthor;
