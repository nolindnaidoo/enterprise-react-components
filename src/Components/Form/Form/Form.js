import React from 'react';
import PropTypes from 'prop-types';
import { Form as SUIForm } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Form = props => (
  <SUIForm
    action={props.action}
    as={props.as}
    className={`form ${props.className}`}
    error={props.error}
    inverted={props.inverted}
    loading={props.loading}
    onSubmit={props.onSubmit}
    reply={props.reply}
    size={props.size}
    style={props.style}
    success={props.success}
    unstackable={props.unstackable}
    warning={props.warning}
    widths={props.widths}
  >
    {props.children}
  </SUIForm>
);

Form.propTypes = {
  action: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.bool,
  inverted: PropTypes.bool,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
  reply: PropTypes.bool,
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  style: stylePropType,
  success: PropTypes.bool,
  unstackable: PropTypes.bool,
  warning: PropTypes.bool,
  widths: PropTypes.oneOf(['equal'])
};

export default Form;
