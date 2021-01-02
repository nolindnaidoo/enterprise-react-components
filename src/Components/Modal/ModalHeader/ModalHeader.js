import React from 'react';
import PropTypes from 'prop-types';
import { Modal as SUIModal } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ModalHeader = props => (
  <SUIModal.Header
    as={props.as}
    className={`modalHeader ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIModal.Header>
);

ModalHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default ModalHeader;
