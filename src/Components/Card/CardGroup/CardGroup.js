import React from 'react';
import PropTypes from 'prop-types';
import { Card as SUICard } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const CardGroup = props => (
  <SUICard.Group
    as={props.as}
    className={`cardGroup ${props.className}`}
    doubling={props.doubling}
    items={props.items}
    itemsPerRow={props.itemsPerRow}
    stackable={props.stackable}
    style={props.style}
    textAlign={props.textAlign}
  >
    {props.children}
  </SUICard.Group>
);

CardGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  doubling: PropTypes.bool,
  items: PropTypes.node,
  itemsPerRow: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen'
  ]),
  stackable: PropTypes.bool,
  style: stylePropType,
  textAlign: PropTypes.oneOf(['left', 'center', 'right'])
};

export default CardGroup;
