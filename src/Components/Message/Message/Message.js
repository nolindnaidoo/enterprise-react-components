import React from 'react';
import PropTypes from 'prop-types';
import { Message as SUIMessage } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Message = props => (
  <SUIMessage
    as={props.as}
    attached={props.attached}
    className={`message ${props.className}`}
    color={props.color}
    compact={props.compact}
    content={props.content}
    error={props.error}
    floating={props.floating}
    header={props.header}
    hidden={props.hidden}
    icon={props.icon}
    info={props.info}
    list={props.list}
    negative={props.negative}
    onDismiss={props.onDismiss}
    positive={props.positive}
    size={props.size}
    style={props.style}
    success={props.success}
    visible={props.visible}
    warning={props.warning}
  >
    {props.children}
  </SUIMessage>
);

Message.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  attached: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['bottom', 'top'])
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf([
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black'
  ]),
  compact: PropTypes.bool,
  content: PropTypes.node,
  error: PropTypes.bool,
  floating: PropTypes.bool,
  header: PropTypes.node,
  hidden: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  info: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.string),
  negative: PropTypes.bool,
  onDismiss: PropTypes.func,
  positive: PropTypes.bool,
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
  success: PropTypes.bool,
  visible: PropTypes.bool,
  warning: PropTypes.bool
};

export default Message;
