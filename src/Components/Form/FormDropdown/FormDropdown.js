import React from 'react';
import PropTypes from 'prop-types';
import { Form as SUIForm } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import stylePropType from 'react-style-proptype';

const FormDropdown = props => (
  <SUIForm.Dropdown
    as={props.as}
    className={`formDropdown ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIForm.Dropdown>
);

FormDropdown.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default FormDropdown;
