import React from 'react';
import PropTypes from 'prop-types';
import { Progress as SUIProgress } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Progress = props => (
  <SUIProgress
    active={props.active}
    as={props.as}
    attached={props.attached}
    autoSuccess={props.autoSuccess}
    className={`progress ${props.className}`}
    color={props.color}
    disabled={props.disabled}
    error={props.error}
    indicating={props.indicating}
    inverted={props.inverted}
    label={props.label}
    percent={props.percent}
    precision={props.precision}
    progress={props.progress}
    size={props.size}
    style={props.style}
    success={props.success}
    total={props.total}
    value={props.value}
    warning={props.warning}
  >
    {props.children}
  </SUIProgress>
);

Progress.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  attached: PropTypes.oneOf(['top', 'bottom']),
  autoSuccess: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black'
  ]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  indicating: PropTypes.bool,
  inverted: PropTypes.bool,
  label: PropTypes.string,
  percent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  precision: PropTypes.number,
  progress: PropTypes.oneOf(['percent', 'ratio', 'value']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'big']),
  style: stylePropType,
  success: PropTypes.bool,
  total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  warning: PropTypes.bool
};

export default Progress;
