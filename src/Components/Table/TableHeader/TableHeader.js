import React from 'react';
import PropTypes from 'prop-types';
import { Table as SUITable } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const TableHeader = props => (
  <SUITable.Header
    as={props.as}
    className={`tableHeader ${props.className}`}
    fullWidth={props.fullWidth}
    style={props.style}
  >
    {props.children}
  </SUITable.Header>
);

TableHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  style: stylePropType
};

export default TableHeader;
