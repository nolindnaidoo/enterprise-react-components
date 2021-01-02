import React from 'react';
import PropTypes from 'prop-types';
import { Table as SUITable } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const TableFooter = props => (
  <SUITable.Footer
    as={props.as}
    className={`tableFooter ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUITable.Footer>
);

TableFooter.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default TableFooter;
