import React from 'react';
import PropTypes from 'prop-types';
import { Transition as SUITransition } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const TransitionGroup = props => (
  <SUITransition.Group
    animation={props.animation}
    as={props.as}
    className={`transitionGroup ${props.className}`}
    duration={props.duration}
    style={props.style}
  >
    {props.children}
  </SUITransition.Group>
);

TransitionGroup.propTypes = {
  animation: PropTypes.oneOf([
    'scale',
    'fade',
    'fade up',
    'fade down',
    'fade left',
    'fade right',
    'horizontal flip',
    'vertical flip',
    'drop',
    'fly left',
    'fly right',
    'fly up',
    'fly down',
    'swing left',
    'swing right',
    'swing up',
    'swing down',
    'browse',
    'browse right',
    'slide down',
    'slide up',
    'slide right',
    'jiggle',
    'flash',
    'shake',
    'pulse',
    'tada',
    'bounce'
  ]),
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  duration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      hide: PropTypes.number,
      show: PropTypes.number
    }),
    PropTypes.string
  ]),
  style: stylePropType
};

export default TransitionGroup;
