import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as SUIPagination } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const PaginationItem = props => (
  <SUIPagination.Item
    active={props.active}
    className={`paginationItem ${props.className}`}
    onClick={props.onClick}
    onKeyDown={props.onKeyDown}
    style={props.style}
    type={props.type}
  />
);

PaginationItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  style: stylePropType,
  type: PropTypes.oneOf([
    'ellipsisItem',
    'firstItem',
    'prevItem',
    'pageItem',
    'nextItem',
    'lastItem'
  ])
};

export default PaginationItem;
