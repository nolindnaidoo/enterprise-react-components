import React from 'react';
import PropTypes from 'prop-types';
import { Statistic as SUIStatistic } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Statistic = props => (
  <SUIStatistic
    as={props.as}
    className={`statistic ${props.className}`}
    color={props.color}
    floated={props.floated}
    horizontal={props.horizontal}
    inverted={props.inverted}
    label={props.label}
    size={props.size}
    style={props.style}
    text={props.text}
    value={props.value}
  >
    {props.children}
  </SUIStatistic>
);

Statistic.propTypes = {
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
  floated: PropTypes.oneOf(['left', 'right']),
  horizontal: PropTypes.bool,
  inverted: PropTypes.bool,
  label: PropTypes.string,
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'huge']),
  style: stylePropType,
  text: PropTypes.bool,
  value: PropTypes.string
};

export default Statistic;
