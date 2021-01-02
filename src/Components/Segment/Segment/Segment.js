import React from 'react';
import PropTypes from 'prop-types';
import { Segment as SUISegment } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Segment = props => (
  <SUISegment
    as={props.as}
    attached={props.attached}
    basic={props.basic}
    circular={props.circular}
    className={`segment ${props.className}`}
    clearing={props.clearing}
    color={props.color}
    compact={props.compact}
    disabled={props.disabled}
    floated={props.floated}
    inverted={props.inverted}
    loading={props.loading}
    padded={props.padded}
    piled={props.piled}
    raised={props.raised}
    secondary={props.secondary}
    size={props.size}
    stacked={props.stacked}
    style={props.style}
    tertiary={props.tertiary}
    textAlign={props.textAlign}
    vertical={props.vertical}
  >
    {props.children}
  </SUISegment>
);

Segment.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  attached: PropTypes.oneOf(['top', 'bottom']),
  basic: PropTypes.bool,
  children: PropTypes.node,
  circular: PropTypes.bool,
  className: PropTypes.string,
  clearing: PropTypes.bool,
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
  compact: PropTypes.bool,
  disabled: PropTypes.bool,
  floated: PropTypes.oneOf(['left', 'right']),
  inverted: PropTypes.bool,
  loading: PropTypes.bool,
  padded: PropTypes.bool,
  piled: PropTypes.bool,
  raised: PropTypes.bool,
  secondary: PropTypes.bool,
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  stacked: PropTypes.bool,
  style: stylePropType,
  tertiary: PropTypes.bool,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  vertical: PropTypes.bool
};

export default Segment;
