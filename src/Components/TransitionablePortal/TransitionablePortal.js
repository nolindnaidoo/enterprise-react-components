import React from 'react';
import PropTypes from 'prop-types';
import { TransitionablePortal as SUITransitionablePortal } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const TransitionablePortal = props => (
  <SUITransitionablePortal
    className={`transitionablePortal ${props.className}`}
    closeOnTriggerClick={props.closeOnTriggerClick}
    onClose={props.onClose}
    onHide={props.onHide}
    onOpen={props.onOpen}
    onStart={props.onStart}
    open={props.open}
    openOnTriggerClick={props.openOnTriggerClick}
    style={props.style}
    transition={props.transition}
    trigger={props.trigger}
  >
    {props.children}
  </SUITransitionablePortal>
);

TransitionablePortal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeOnTriggerClick: PropTypes.bool,
  onClose: PropTypes.func,
  onHide: PropTypes.func,
  onOpen: PropTypes.func,
  onStart: PropTypes.func,
  open: PropTypes.bool,
  openOnTriggerClick: PropTypes.bool,
  style: stylePropType,
  transition: PropTypes.shape({
    animation: PropTypes.string,
    duration: PropTypes.number
  }),
  trigger: PropTypes.node
};

export default TransitionablePortal;
