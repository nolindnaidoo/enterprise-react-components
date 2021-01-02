import React from 'react';
import PropTypes from 'prop-types';
import { Comment as SUIComment } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const CommentAvatar = props => (
  <SUIComment.Avatar
    as={props.as}
    className={`commentAvatar ${props.className}`}
    src={props.src}
    style={props.style}
  />
);

CommentAvatar.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  src: PropTypes.string,
  style: stylePropType
};

export default CommentAvatar;
