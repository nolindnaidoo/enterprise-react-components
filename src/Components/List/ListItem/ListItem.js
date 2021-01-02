import React from 'react';
import PropTypes from 'prop-types';
import { List as SUIList } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ListItem = props => (
  <SUIList.Item
    active={props.active}
    as={props.as}
    className={`listItem ${props.className}`}
    description={props.description}
    disabled={props.disabled}
    header={props.header}
    icon={props.icon}
    image={props.image}
    onClick={props.onClick}
    style={props.style}
    value={props.value}
  >
    {props.children}
  </SUIList.Item>
);

ListItem.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  disabled: PropTypes.bool,
  header: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
  style: stylePropType,
  value: PropTypes.string
};

export default ListItem;
