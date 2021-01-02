import React from 'react';
import PropTypes from 'prop-types';
import { Form as SUIForm } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FormSelect = props => (
  <SUIForm.Select
    as={props.as}
    className={`formSelect ${props.className}`}
    style={props.style}
  />
);

FormSelect.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  style: stylePropType
};

export default FormSelect;
