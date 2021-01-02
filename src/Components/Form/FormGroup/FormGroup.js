import React from 'react';
import PropTypes from 'prop-types';
import { Form as SUIForm } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FormGroup = props => (
  <SUIForm.Group
    as={props.as}
    className={`formGroup ${props.className}`}
    grouped={props.grouped}
    inline={props.inline}
    style={props.style}
    unstackable={props.unstackable}
    widths={props.widths}
  >
    {props.children}
  </SUIForm.Group>
);

FormGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  grouped: PropTypes.bool,
  inline: PropTypes.bool,
  style: stylePropType,
  unstackable: PropTypes.bool,
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
    'sixteen',
    'equal'
  ])
};

export default FormGroup;
