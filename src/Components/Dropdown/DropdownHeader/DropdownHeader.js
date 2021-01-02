import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as SUIDropdown } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const DropdownHeader = props => (
  <SUIDropdown.Header
    as={props.as}
    className={`dropdownHeader ${props.className}`}
    icon={props.icon}
    style={props.style}
  >
    {props.children}
  </SUIDropdown.Header>
);

DropdownHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  style: stylePropType
};

export default DropdownHeader;
