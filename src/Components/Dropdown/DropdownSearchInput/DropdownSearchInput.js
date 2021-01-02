import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as SUIDropdown } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const DropdownSearchInput = props => (
  <SUIDropdown.SearchInput
    as={props.as}
    className={`dropdownSearchInput ${props.className}`}
    inputRef={props.inputRef}
    style={props.style}
    tabIndex={props.tabIndex}
    type={props.type}
    value={props.value}
  />
);

DropdownSearchInput.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  inputRef: PropTypes.func,
  style: stylePropType,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default DropdownSearchInput;
