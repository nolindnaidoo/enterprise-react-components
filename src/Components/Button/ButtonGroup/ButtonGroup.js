import React from 'react';
import PropTypes from 'prop-types';
import { Button as SUIButton } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ButtonGroup = props => (
  <SUIButton.Group
    as={props.as}
    attached={props.attached}
    basic={props.basic}
    className={`buttonGroup ${props.className}`}
    color={props.color}
    compact={props.compact}
    floated={props.floated}
    fluid={props.fluid}
    icon={props.icon}
    inverted={props.inverted}
    labeled={props.labeled}
    negative={props.negative}
    positive={props.positive}
    primary={props.primary}
    secondary={props.secondary}
    size={props.size}
    style={props.style}
    toggle={props.toggle}
    vertical={props.vertical}
    widths={props.widths}
  >
    {props.children}
  </SUIButton.Group>
);

ButtonGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  attached: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
  ]),
  basic: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
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
  floated: PropTypes.oneOf(['left', 'right']),
  fluid: PropTypes.bool,
  icon: PropTypes.bool,
  inverted: PropTypes.bool,
  labeled: PropTypes.bool,
  negative: PropTypes.bool,
  positive: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'medium',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  style: stylePropType,
  toggle: PropTypes.bool,
  vertical: PropTypes.bool,
  widths: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen'
  ])
};

export default ButtonGroup;
