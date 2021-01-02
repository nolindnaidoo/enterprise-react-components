import React from 'react';
import PropTypes from 'prop-types';
import { Table as SUITable } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const TableRow = props => (
  <SUITable.Row
    active={props.active}
    as={props.as}
    cellAs={props.cellAs}
    className={`tableRow ${props.className}`}
    disabled={props.disabled}
    error={props.error}
    negative={props.negative}
    positive={props.positive}
    style={props.style}
    textAlign={props.textAlign}
    verticalAlign={props.verticalAlign}
    warning={props.warning}
  >
    {props.children}
  </SUITable.Row>
);

TableRow.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  cellAs: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  negative: PropTypes.bool,
  positive: PropTypes.bool,
  style: stylePropType,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top']),
  warning: PropTypes.bool
};

export default TableRow;
