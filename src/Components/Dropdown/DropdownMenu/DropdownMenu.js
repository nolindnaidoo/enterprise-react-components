import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as SUIDropdown } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const DropdownMenu = props => (
  <SUIDropdown.Menu
    as={props.as}
    className={`dropdownMenu ${props.className}`}
    scrolling={props.scrolling}
    style={props.style}
  >
    {props.children}
  </SUIDropdown.Menu>
);

DropdownMenu.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  scrolling: PropTypes.bool,
  style: stylePropType
};

export default DropdownMenu;
