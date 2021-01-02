import React from 'react';
import PropTypes from 'prop-types';
import { Message as SUIMessage } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const MessageList = props => (
  <SUIMessage.List
    as={props.as}
    className={`messageList ${props.className}`}
    items={props.items}
    style={props.style}
  >
    {props.children}
  </SUIMessage.List>
);

MessageList.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.string),
  style: stylePropType
};

export default MessageList;
