import React from 'react';
import PropTypes from 'prop-types';
import { Header as SUIHeader } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Header = props => (
  <SUIHeader
    as={props.as}
    attached={props.attached}
    block={props.block}
    className={`header ${props.className}`}
    color={props.color}
    disabled={props.disabled}
    dividing={props.dividing}
    floated={props.floated}
    icon={props.icon}
    inverted={props.inverted}
    size={props.size}
    style={props.style}
    sub={props.sub}
    textAlign={props.textAlign}
  >
    {props.children}
  </SUIHeader>
);

Header.propTypes = {
  as: PropTypes.PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  attached: PropTypes.oneOf(['top', 'bottom']),
  block: PropTypes.bool,
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
  disabled: PropTypes.bool,
  dividing: PropTypes.bool,
  floated: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.bool,
  inverted: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  style: stylePropType,
  sub: PropTypes.bool,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justified'])
};

export default Header;
