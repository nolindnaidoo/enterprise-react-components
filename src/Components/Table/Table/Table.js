import React from 'react';
import PropTypes from 'prop-types';
import { Table as SUITable } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Table = props => (
  <SUITable
    as={props.as}
    attached={props.attached}
    basic={props.basic}
    celled={props.celled}
    className={`table ${props.className}`}
    collapsing={props.collapsing}
    color={props.color}
    columns={props.columns}
    compact={props.compact}
    definition={props.definition}
    fixed={props.fixed}
    inverted={props.inverted}
    padded={props.padded}
    selectable={props.selectable}
    singleLine={props.singleLine}
    size={props.size}
    sortable={props.sortable}
    stackable={props.stackable}
    striped={props.striped}
    structured={props.structured}
    style={props.style}
    textAlign={props.textAlign}
    unstackable={props.unstackable}
    verticalAlign={props.verticalAlign}
  >
    {props.children}
  </SUITable>
);

Table.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  attached: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['top', 'bottom'])
  ]),
  basic: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),
  celled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  collapsing: PropTypes.bool,
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
  columns: PropTypes.oneOf([
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
  compact: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),
  definition: PropTypes.bool,
  fixed: PropTypes.bool,
  inverted: PropTypes.bool,
  padded: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),
  selectable: PropTypes.bool,
  singleLine: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  sortable: PropTypes.bool,
  stackable: PropTypes.bool,
  striped: PropTypes.bool,
  structured: PropTypes.bool,
  style: stylePropType,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  unstackable: PropTypes.bool,
  verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top'])
};

export default Table;
