import React from 'react';
import PropTypes from 'prop-types';
import { Table as SUITable } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const TableBody = props => (
  <SUITable.Body
    as={props.as}
    className={`tableBody ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUITable.Body>
);

TableBody.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default TableBody;
