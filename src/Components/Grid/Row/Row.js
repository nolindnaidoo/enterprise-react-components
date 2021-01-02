import React from 'react';
import PropTypes from 'prop-types';
import { Grid as SUIGrid } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Row = props => (
  <SUIGrid.Row
    as={props.as}
    centered={props.centered}
    className={`row ${props.className}`}
    color={props.color}
    columns={props.columns}
    divided={props.divided}
    only={props.only}
    reversed={props.reversed}
    stretched={props.stretched}
    style={props.style}
    textAlign={props.textAlign}
    verticalAlign={props.verticalAlign}
  >
    {props.children}
  </SUIGrid.Row>
);

Row.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  centered: PropTypes.bool,
  children: PropTypes.node,
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
  divided: PropTypes.bool,
  only: PropTypes.oneOf([
    'mobile',
    'tablet',
    'computer',
    'large screen',
    'widescreen'
  ]),
  reversed: PropTypes.oneOf([
    'computer',
    'computer vertically',
    'mobile',
    'mobile vertically',
    'tablet',
    'tablet vertically'
  ]),
  stretched: PropTypes.bool,
  style: stylePropType,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justified']),
  verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top'])
};

export default Row;
