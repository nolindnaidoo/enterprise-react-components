import React from 'react';
import PropTypes from 'prop-types';
import { Confirm as SUIConfirm } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Confirm = props => (
  <SUIConfirm
    cancelButton={props.cancelButton}
    className={`confirm ${props.className}`}
    confirmButton={props.confirmButton}
    content={props.content}
    header={props.header}
    onCancel={props.onCancel}
    onConfirm={props.onConfirm}
    open={props.open}
    size={props.size}
    style={props.style}
  />
);

Confirm.propTypes = {
  cancelButton: PropTypes.string,
  className: PropTypes.string,
  confirmButton: PropTypes.string,
  content: PropTypes.node,
  header: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  open: PropTypes.bool,
  size: PropTypes.oneOf(['fullscreen', 'large', 'mini', 'small', 'tiny']),
  style: stylePropType
};

export default Confirm;
