import React from 'react';
import PropTypes from 'prop-types';
import { Menu as SUIMenu } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Menu = props => (
  <SUIMenu
    as={props.as}
    attached={props.attached}
    borderless={props.borderless}
    className={`menu ${props.className}`}
    color={props.color}
    compact={props.compact}
    fixed={props.fixed}
    floated={props.floated}
    fluid={props.fluid}
    icon={props.icon}
    inverted={props.inverted}
    onItemClick={props.onItemClick}
    pagination={props.pagination}
    pointing={props.pointing}
    secondary={props.secondary}
    size={props.size}
    stackable={props.stackable}
    style={props.style}
    tabular={props.tabular}
    text={props.text}
    vertical={props.vertical}
    widths={props.widths}
  >
    {props.children}
  </SUIMenu>
);

Menu.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  attached: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['top', 'bottom'])
  ]),
  borderless: PropTypes.bool,
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
  fixed: PropTypes.oneOf(['left', 'right', 'bottom', 'top']),
  floated: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['right'])]),
  fluid: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['labeled'])]),
  inverted: PropTypes.bool,
  onItemClick: PropTypes.func,
  pagination: PropTypes.bool,
  pointing: PropTypes.bool,
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
  stackable: PropTypes.bool,
  style: stylePropType,
  tabular: PropTypes.bool,
  text: PropTypes.bool,
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

export default Menu;
