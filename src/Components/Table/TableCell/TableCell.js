import React from 'react';
import PropTypes from 'prop-types';
import { Table as SUITable } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const TableCell = props => (
  <SUITable.Cell
    active={props.active}
    as={props.as}
    className={`tableCell ${props.className}`}
    collapsing={props.collapsing}
    disabled={props.disabled}
    error={props.error}
    icon={props.icon}
    negative={props.negative}
    positive={props.positive}
    selectable={props.selectable}
    singleLine={props.singleLine}
    style={props.style}
    textAlign={props.textAlign}
    verticalAlign={props.verticalAlign}
    warning={props.warning}
    width={props.width}
  >
    {props.children}
  </SUITable.Cell>
);

TableCell.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  collapsing: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.node,
  negative: PropTypes.bool,
  positive: PropTypes.bool,
  selectable: PropTypes.bool,
  singleLine: PropTypes.bool,
  style: stylePropType,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top']),
  warning: PropTypes.bool,
  width: PropTypes.oneOf([
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
  ])
};

export default TableCell;
