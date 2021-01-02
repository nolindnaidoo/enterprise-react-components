import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar as SUISidebar } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const SidebarPusher = props => (
  <SUISidebar.Pusher
    as={props.as}
    className={`sidebarPusher ${props.className}`}
    dimmed={props.dimmed}
    style={props.style}
  >
    {props.children}
  </SUISidebar.Pusher>
);

SidebarPusher.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  dimmed: PropTypes.bool,
  style: stylePropType
};

export default SidebarPusher;
