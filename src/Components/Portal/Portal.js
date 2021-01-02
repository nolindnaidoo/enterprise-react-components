import React from 'react';
import PropTypes from 'prop-types';
import { Portal as SUIPortal } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Portal = props => (
  <SUIPortal
    className={`portal ${props.className}`}
    closeOnDocumentClick={props.closeOnDocumentClick}
    closeOnEscape={props.closeOnEscape}
    closeOnPortalMouseLeave={props.closeOnPortalMouseLeave}
    closeOnRootNodeClick={props.closeOnRootNodeClick}
    closeOnTriggerBlur={props.closeOnTriggerBlur}
    closeOnTriggerClick={props.closeOnTriggerClick}
    closeOnTriggerMouseLeave={props.closeOnTriggerMouseLeave}
    defaultOpen={props.defaultOpen}
    mountNode={props.mountNode}
    mouseEnterDelay={props.mouseEnterDelay}
    mouseLeaveDelay={props.mouseLeaveDelay}
    onClose={props.onClose}
    onMount={props.onMount}
    onOpen={props.onOpen}
    onUnmount={props.onUnmount}
    open={props.open}
    openOnTriggerClick={props.openOnTriggerClick}
    openOnTriggerFocus={props.openOnTriggerFocus}
    openOnTriggerMouseEnter={props.openOnTriggerMouseEnter}
    prepend={props.prepend}
    style={props.style}
    trigger={props.trigger}
  >
    {props.children}
  </SUIPortal>
);

Portal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeOnDocumentClick: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  closeOnPortalMouseLeave: PropTypes.bool,
  closeOnRootNodeClick: PropTypes.bool,
  closeOnTriggerBlur: PropTypes.bool,
  closeOnTriggerClick: PropTypes.bool,
  closeOnTriggerMouseLeave: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  mountNode: PropTypes.any, //eslint-disable-line
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  onClose: PropTypes.func,
  onMount: PropTypes.func,
  onOpen: PropTypes.func,
  onUnmount: PropTypes.func,
  open: PropTypes.bool,
  openOnTriggerClick: PropTypes.bool,
  openOnTriggerFocus: PropTypes.bool,
  openOnTriggerMouseEnter: PropTypes.bool,
  prepend: PropTypes.bool,
  style: stylePropType,
  trigger: PropTypes.node
};

export default Portal;
