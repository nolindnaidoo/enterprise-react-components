import React from 'react';
import PropTypes from 'prop-types';
import { Form as SUIForm } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FormButton = props => (
  <SUIForm.Button
    as={props.as}
    className={`formButton ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIForm.Button>
);

FormButton.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default FormButton;
