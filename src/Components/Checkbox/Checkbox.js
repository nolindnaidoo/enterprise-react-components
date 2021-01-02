import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as SUICheckbox } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Checkbox = props => (
  <SUICheckbox
    as={props.as}
    checked={props.checked}
    className={`checkbox ${props.className}`}
    defaultChecked={props.defaultChecked}
    defaultIndeterminate={props.defaultIndeterminate}
    disabled={props.disabled}
    fitted={props.fitted}
    id={props.id}
    indeterminate={props.indeterminate}
    label={props.label}
    name={props.name}
    onChange={props.onChange}
    onClick={props.onClick}
    onMouseDown={props.onMouseDown}
    radio={props.radio}
    readOnly={props.readOnly}
    slider={props.slider}
    style={props.style}
    tabIndex={props.tabIndex}
    toggle={props.toggle}
    type={props.type}
    value={props.value}
  />
);

Checkbox.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  checked: PropTypes.bool,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  defaultIndeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  fitted: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  indeterminate: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  radio: PropTypes.bool,
  readOnly: PropTypes.bool,
  slider: PropTypes.bool,
  style: stylePropType,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  toggle: PropTypes.bool,
  type: PropTypes.oneOf(['checkbox', 'radio']),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Checkbox;
