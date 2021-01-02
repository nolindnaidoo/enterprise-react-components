import React from 'react';
import PropTypes from 'prop-types';
import { Menu as SUIMenu } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const MenuNested = props => (
  <SUIMenu.Menu
    as={props.as}
    className={`menuNested ${props.className}`}
    position={props.position}
    style={props.style}
  >
    {props.children}
  </SUIMenu.Menu>
);

MenuNested.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(['left', 'right']),
  style: stylePropType
};

export default MenuNested;
