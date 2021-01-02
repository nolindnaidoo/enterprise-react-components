import React from 'react';
import PropTypes from 'prop-types';
import { Modal as SUIModal } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ModalContent = props => (
  <SUIModal.Content
    as={props.as}
    className={`modalContent ${props.className}`}
    image={props.image}
    scrolling={props.scrolling}
    style={props.style}
  >
    {props.children}
  </SUIModal.Content>
);

ModalContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.bool,
  scrolling: PropTypes.bool,
  style: stylePropType
};

export default ModalContent;
