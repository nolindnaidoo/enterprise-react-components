import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar as SUISidebar } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Sidebar = props => (
  <SUISidebar
    animation={props.animation}
    as={props.as}
    className={`sidebar ${props.className}`}
    defaultVisible={props.defaultVisible}
    direction={props.direction}
    inverted={props.inverted}
    style={props.style}
    vertical={props.vertical}
    visible={props.visible}
    width={props.width}
  >
    {props.children}
  </SUISidebar>
);

Sidebar.propTypes = {
  animation: PropTypes.oneOf([
    'overlay',
    'push',
    'scale down',
    'uncover',
    'slide out',
    'slide along'
  ]),
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  defaultVisible: PropTypes.bool,
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  inverted: PropTypes.bool,
  style: stylePropType,
  vertical: PropTypes.bool,
  visible: PropTypes.bool,
  width: PropTypes.oneOf(['very thin', 'thin', 'wide', 'very wide'])
};

export default Sidebar;
