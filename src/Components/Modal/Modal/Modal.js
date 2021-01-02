import React from 'react';
import PropTypes from 'prop-types';
import { Modal as SUIModal } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Modal = props => (
  <SUIModal
    actions={props.actions}
    as={props.as}
    basic={props.basic}
    className={`modal ${props.className}`}
    closeIcon={props.closeIcon}
    closeOnDimmerClick={props.closeOnDimmerClick}
    closeOnDocumentClick={props.closeOnDocumentClick}
    defaultOpen={props.defaultOpen}
    dimmer={props.dimmer}
    eventPool={props.eventPool}
    header={props.header}
    mountNode={props.mountNode}
    onActionClick={props.onActionClick}
    onClose={props.onClose}
    onMount={props.onMount}
    onOpen={props.onOpen}
    onUnmount={props.onUnmount}
    open={props.open}
    size={props.size}
    style={props.style}
    trigger={props.trigger}
  >
    {props.children}
  </SUIModal>
);

Modal.propTypes = {
  actions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf({
      key: PropTypes.string,
      content: PropTypes.string,
      positive: PropTypes.bool
    })
  ]),
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  basic: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  closeIcon: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.object
  ]),
  closeOnDimmerClick: PropTypes.bool,
  closeOnDocumentClick: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  dimmer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['inverted', 'blurring'])
  ]),
  eventPool: PropTypes.string,
  header: PropTypes.node,
  mountNode: PropTypes.any, //eslint-disable-line
  onActionClick: PropTypes.func,
  onClose: PropTypes.func,
  onMount: PropTypes.func,
  onOpen: PropTypes.func,
  onUnmount: PropTypes.func,
  open: PropTypes.bool,
  size: PropTypes.oneOf(['fullscreen', 'large', 'mini', 'small', 'tiny']),
  style: stylePropType,
  trigger: PropTypes.node
};

export default Modal;
