import React from 'react';
import PropTypes from 'prop-types';
import { Item as SUIItem } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ItemGroup = props => (
  <SUIItem.Group
    as={props.as}
    className={`itemGroup ${props.className}`}
    divided={props.divided}
    link={props.link}
    relaxed={props.relaxed}
    style={props.style}
    unstackable={props.unstackable}
  >
    {props.children}
  </SUIItem.Group>
);

ItemGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  divided: PropTypes.bool,
  link: PropTypes.bool,
  relaxed: PropTypes.bool,
  style: stylePropType,
  unstackable: PropTypes.bool
};

export default ItemGroup;
