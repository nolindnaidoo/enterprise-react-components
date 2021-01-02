import React from 'react';
import PropTypes from 'prop-types';
import { Form as SUIForm } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FormCheckbox = props => (
  <SUIForm.Checkbox
    as={props.as}
    className={`formCheckbox ${props.className}`}
    style={props.style}
  />
);

FormCheckbox.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  style: stylePropType
};

export default FormCheckbox;
