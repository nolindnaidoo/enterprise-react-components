import React from 'react';
import PropTypes from 'prop-types';
import { Button as SUIButton } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Button = props => (
  <SUIButton
    active={props.active}
    animated={props.animated}
    as={props.as}
    attached={props.attached}
    basic={props.basic}
    circular={props.circular}
    className={`button ${props.className}`}
    color={props.color}
    compact={props.compact}
    disabled={props.disabled}
    floated={props.floated}
    fluid={props.fluid}
    icon={props.icon}
    inverted={props.inverted}
    label={props.label}
    labelPosition={props.labelPosition}
    loading={props.loading}
    negative={props.negative}
    onClick={props.onClick}
    positive={props.positive}
    primary={props.primary}
    secondary={props.secondary}
    size={props.size}
    style={props.style}
    tabIndex={props.tabIndex}
    toggle={props.toggle}
  >
    {props.children}
  </SUIButton>
);

Button.propTypes = {
  active: PropTypes.bool,
  animated: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['fade', 'vertical'])
  ]),
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  attached: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['top', 'bottom'])
  ]),
  basic: PropTypes.bool,
  children: PropTypes.string,
  circular: PropTypes.bool,
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
  disabled: PropTypes.bool,
  floated: PropTypes.oneOf(['left', 'right']),
  fluid: PropTypes.bool,
  icon: PropTypes.string,
  inverted: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.string
  ]),
  labelPosition: PropTypes.oneOf(['left', 'right']),
  loading: PropTypes.bool,
  negative: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
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
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  toggle: PropTypes.bool
};

export default Button;
