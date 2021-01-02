import React from 'react';
import PropTypes from 'prop-types';
import { Item as SUIItem } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ItemExtra = props => (
  <SUIItem.Extra
    as={props.as}
    className={`itemExtra ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIItem.Extra>
);

ItemExtra.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType
};

export default ItemExtra;
