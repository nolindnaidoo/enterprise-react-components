import React from 'react';
import PropTypes from 'prop-types';
import { Reveal as SUIReveal } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Reveal = props => (
  <SUIReveal
    active={props.active}
    animated={props.animated}
    as={props.as}
    className={`reveal ${props.className}`}
    disabled={props.disabled}
    instant={props.instant}
    style={props.style}
  >
    {props.children}
  </SUIReveal>
);

Reveal.propTypes = {
  active: PropTypes.bool,
  animated: PropTypes.oneOf([
    'fade',
    'small fade',
    'move',
    'move right',
    'move up',
    'move down',
    'rotate',
    'rotate left'
  ]),
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  instant: PropTypes.bool,
  style: stylePropType
};

export default Reveal;
