import React from 'react';
import PropTypes from 'prop-types';
import { Transition as SUITransition } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Transition = props => (
  <SUITransition
    animation={props.animation}
    className={`transition ${props.className}`}
    duration={props.duration}
    mountOnShow={props.mountOnShow}
    onComplete={props.onComplete}
    onHide={props.onHide}
    onShow={props.onShow}
    onStart={props.onStart}
    reactKey={props.reactKey}
    style={props.style}
    transitionOnMount={props.transitionOnMount}
    unmountOnHide={props.unmountOnHide}
    visible={props.visible}
  >
    {props.children}
  </SUITransition>
);

Transition.propTypes = {
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
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  duration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      hide: PropTypes.number,
      show: PropTypes.number
    }),
    PropTypes.string
  ]),
  mountOnShow: PropTypes.bool,
  onComplete: PropTypes.func,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  onStart: PropTypes.func,
  reactKey: PropTypes.string,
  style: stylePropType,
  transitionOnMount: PropTypes.bool,
  unmountOnHide: PropTypes.bool,
  visible: PropTypes.bool
};

export default Transition;
