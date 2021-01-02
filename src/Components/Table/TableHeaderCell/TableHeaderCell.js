import React from 'react';
import PropTypes from 'prop-types';
import { Table as SUITable } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const TableHeaderCell = props => (
  <SUITable.HeaderCell
    as={props.as}
    className={`tableHeaderCell ${props.className}`}
    sorted={props.sorted}
    style={props.style}
  >
    {props.children}
  </SUITable.HeaderCell>
);

TableHeaderCell.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  sorted: PropTypes.oneOf(['ascending', 'descending']),
  style: stylePropType
};

export default TableHeaderCell;
