import React from 'react';
import PropTypes from 'prop-types';
import { Statistic as SUIStatistic } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const StatisticGroup = props => (
  <SUIStatistic.Group
    as={props.as}
    className={`statisticGroup ${props.className}`}
    color={props.color}
    horizontal={props.horizontal}
    inverted={props.inverted}
    items={props.items}
    size={props.size}
    style={props.style}
    widths={props.widths}
  >
    {props.children}
  </SUIStatistic.Group>
);

StatisticGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
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
  horizontal: PropTypes.bool,
  inverted: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string
    })
  ),
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'huge']),
  style: stylePropType,
  widths: PropTypes.oneOf([
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

export default StatisticGroup;
