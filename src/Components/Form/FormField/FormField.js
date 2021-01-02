import React from 'react';
import PropTypes from 'prop-types';
import { Form as SUIForm } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FormField = props => (
  <SUIForm.Field
    as={props.as}
    className={`formField ${props.className}`}
    control={props.control}
    disabled={props.disabled}
    error={props.error}
    inline={props.inline}
    label={props.label}
    required={props.required}
    style={props.style}
    type={props.type}
    width={props.width}
  >
    {props.children}
  </SUIForm.Field>
);

FormField.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  control: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.oneOf(['button', 'input', 'select', 'textarea'])
  ]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inline: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  required: PropTypes.bool,
  style: stylePropType,
  type: PropTypes.string,
  width: PropTypes.oneOf([
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

export default FormField;
