import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar as SUISidebar } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const SidebarPushable = props => (
  <SUISidebar.Pushable
    as={props.as}
    className={`sidebarPushable ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUISidebar.Pushable>
);

SidebarPushable.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default SidebarPushable;
