import React from 'react';
import PropTypes from 'prop-types';
import { Modal as SUIModal } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ModalActions = props => (
  <SUIModal.Actions
    actions={props.actions}
    as={props.as}
    className={`modalActions ${props.className}`}
    onActionClick={props.onActionClick}
    style={props.style}
  >
    {props.children}
  </SUIModal.Actions>
);

ModalActions.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.node),
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  onActionClick: PropTypes.func,
  style: stylePropType
};

export default ModalActions;
