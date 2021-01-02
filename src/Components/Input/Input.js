import React from 'react';
import PropTypes from 'prop-types';
import { Input as SUIInput } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Input = props => (
  <SUIInput
    action={props.action}
    actionPosition={props.actionPosition}
    as={props.as}
    className={`input ${props.className}`}
    disabled={props.disabled}
    error={props.error}
    fluid={props.fluid}
    focus={props.focus}
    icon={props.icon}
    iconPosition={props.iconPosition}
    inverted={props.inverted}
    label={props.label}
    labelPosition={props.labelPosition}
    loading={props.loading}
    onChange={props.onChange}
    placeholder={props.placeholder}
    size={props.size}
    style={props.style}
    tabIndex={props.tabIndex}
    transparent={props.transparent}
  >
    {props.children}
  </SUIInput>
);

Input.propTypes = {
  action: PropTypes.bool,
  actionPosition: PropTypes.oneOf(['left']),
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fluid: PropTypes.bool,
  focus: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconPosition: PropTypes.oneOf(['left']),
  inverted: PropTypes.bool,
  label: PropTypes.node,
  labelPosition: PropTypes.oneOf([
    'left',
    'right',
    'left corner',
    'right corner'
  ]),
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
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
  transparent: PropTypes.bool
};

export default Input;
