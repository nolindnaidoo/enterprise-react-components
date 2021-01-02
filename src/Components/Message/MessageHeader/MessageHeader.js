import React from 'react';
import PropTypes from 'prop-types';
import { Message as SUIMessage } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const MessageHeader = props => (
  <SUIMessage.Header
    as={props.as}
    className={`messageHeader ${props.className}`}
    content={props.content}
    style={props.style}
  >
    {props.children}
  </SUIMessage.Header>
);

MessageHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  style: stylePropType
};

export default MessageHeader;
