import React from 'react';
import PropTypes from 'prop-types';
import { Message as SUIMessage } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const MessageContent = props => (
  <SUIMessage.Content
    as={props.as}
    className={`messageContent ${props.className}`}
    content={props.content}
    style={props.style}
  >
    {props.children}
  </SUIMessage.Content>
);

MessageContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  style: stylePropType
};

export default MessageContent;
