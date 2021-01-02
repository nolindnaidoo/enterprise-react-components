import React from 'react';
import PropTypes from 'prop-types';
import { Menu as SUIMenu } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const MenuItem = props => (
  <SUIMenu.Item
    active={props.active}
    as={props.as}
    className={`menuItem ${props.className}`}
    color={props.color}
    disabled={props.disabled}
    fitted={props.fitted}
    header={props.header}
    icon={props.icon}
    index={props.index}
    link={props.link}
    name={props.name}
    onClick={props.onClick}
    position={props.position}
    style={props.style}
  >
    {props.children}
  </SUIMenu.Item>
);

MenuItem.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black'
  ]),
  disabled: PropTypes.bool,
  fitted: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['horizontally', 'vertically'])
  ]),
  header: PropTypes.bool,
  icon: PropTypes.bool,
  index: PropTypes.number,
  link: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['left', 'right']),
  style: stylePropType
};

export default MenuItem;
