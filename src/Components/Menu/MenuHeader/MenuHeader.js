import React from 'react';
import PropTypes from 'prop-types';
import { Menu as SUIMenu } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const MenuHeader = props => (
  <SUIMenu.Header
    as={props.as}
    className={`menuHeader ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIMenu.Header>
);

MenuHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default MenuHeader;
