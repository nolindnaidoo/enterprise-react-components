import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as SUIDropdown } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const DropdownDivider = props => (
  <SUIDropdown.Divider
    as={props.as}
    className={`dropdownDivider ${props.className}`}
    style={props.style}
  />
);

DropdownDivider.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  style: stylePropType
};

export default DropdownDivider;
