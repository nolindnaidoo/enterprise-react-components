import React from 'react';
import PropTypes from 'prop-types';
import { Item as SUIItem } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ItemHeader = props => (
  <SUIItem.Header
    as={props.as}
    className={`itemHeader ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIItem.Header>
);

ItemHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

export default ItemHeader;
