import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as SUIPagination } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Pagination = props => (
  <SUIPagination
    activePage={props.activePage}
    ariaLabel={props.ariaLabel}
    boundaryRange={props.boundaryRange}
    className={`pagination ${props.className}`}
    color={props.color}
    defaultActivePage={props.defaultActivePage}
    ellipsisItem={props.ellipsisItem}
    firstItem={props.firstItem}
    floated={props.floated}
    fluid={props.fluid}
    inverted={props.inverted}
    lastItem={props.lastItem}
    nextItem={props.nextItem}
    onPageChange={props.onPageChange}
    pageItem={props.pageItem}
    pointing={props.pointing}
    prevItem={props.prevItem}
    secondary={props.secondary}
    siblingRange={props.siblingRange}
    size={props.size}
    stackable={props.stackable}
    style={props.style}
    text={props.text}
    totalPages={props.totalPages}
    vertical={props.vertical}
  />
);

Pagination.propTypes = {
  activePage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ariaLabel: PropTypes.string,
  boundaryRange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
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
  defaultActivePage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ellipsisItem: PropTypes.string,
  firstItem: PropTypes.object, // eslint-disable-line
  floated: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['right'])]),
  fluid: PropTypes.bool,
  inverted: PropTypes.bool,
  lastItem: PropTypes.object, // eslint-disable-line
  nextItem: PropTypes.object, // eslint-disable-line
  onPageChange: PropTypes.func,
  pageItem: PropTypes.object, // eslint-disable-line
  pointing: PropTypes.bool,
  prevItem: PropTypes.object, // eslint-disable-line
  secondary: PropTypes.bool,
  siblingRange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'medium',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  stackable: PropTypes.bool,
  style: stylePropType,
  text: PropTypes.bool,
  totalPages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  vertical: PropTypes.bool
};

export default Pagination;
