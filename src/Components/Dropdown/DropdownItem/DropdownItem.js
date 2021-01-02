import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as SUIDropdown } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const DropdownItem = props => (
  <SUIDropdown.Item
    active={props.active}
    as={props.as}
    className={`dropdownItem ${props.className}`}
    description={props.description}
    disabled={props.disabled}
    flag={props.flag}
    icon={props.icon}
    image={props.image}
    label={props.label}
    onClick={props.onClick}
    selected={props.selected}
    style={props.style}
    text={props.text}
    value={props.value}
  >
    {props.children}
  </SUIDropdown.Item>
);

DropdownItem.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  flag: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.node,
  label: PropTypes.node,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  style: stylePropType,
  text: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default DropdownItem;
