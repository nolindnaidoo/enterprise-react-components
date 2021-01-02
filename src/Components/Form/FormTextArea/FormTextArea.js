import React from 'react';
import PropTypes from 'prop-types';
import { Form as SUIForm } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FormTextArea = props => (
  <SUIForm.TextArea
    as={props.as}
    className={`formTextArea ${props.className}`}
    style={props.style}
  />
);

FormTextArea.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  style: stylePropType
};

export default FormTextArea;
