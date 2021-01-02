import React from 'react';
import PropTypes from 'prop-types';
import { Grid as SUIGrid } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Grid = props => (
  <SUIGrid
    as={props.as}
    celled={props.celled}
    centered={props.centered}
    className={`grid ${props.className}`}
    container={props.container}
    columns={props.columns}
    divided={props.divided}
    doubling={props.doubling}
    inverted={props.inverted}
    padded={props.padded}
    reversed={props.reversed}
    relaxed={props.relaxed}
    stackable={props.stackable}
    stretched={props.stretched}
    style={props.style}
    textAlign={props.textAlign}
    verticalAlign={props.verticalAlign}
  >
    {props.children}
  </SUIGrid>
);

Grid.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  celled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['internally'])
  ]),
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
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
    'sixteen',
    'equal'
  ]).isRequired,
  container: PropTypes.bool,
  divided: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['vertically'])
  ]),
  doubling: PropTypes.bool,
  inverted: PropTypes.bool,
  padded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['horizontally', 'vertically'])
  ]),
  relaxed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),
  reversed: PropTypes.oneOf([
    'computer',
    'computer vertically',
    'mobile',
    'mobile vertically',
    'tablet',
    'tablet vertically'
  ]),
  stackable: PropTypes.bool,
  stretched: PropTypes.bool,
  style: stylePropType,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justified']),
  verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top'])
};

export default Grid;
