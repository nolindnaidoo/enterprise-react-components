import React from 'react';
import PropTypes from 'prop-types';
import { Radio as SUIRadio } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Radio = props => (
  <SUIRadio
    checked={props.checked}
    className={`radio ${props.className}`}
    disabled={props.disabled}
    label={props.label}
    name={props.name}
    onChange={props.onChange}
    slider={props.slider}
    style={props.style}
    toggle={props.toggle}
    type={props.type}
    value={props.value}
  />
);

Radio.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  slider: PropTypes.bool,
  style: stylePropType,
  toggle: PropTypes.bool,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Radio;
