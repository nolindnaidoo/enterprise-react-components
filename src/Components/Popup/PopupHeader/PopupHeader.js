import React from 'react';
import PropTypes from 'prop-types';
import { Popup as SUIPopup } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const PopupHeader = props => (
  <SUIPopup.Header
    as={props.as}
    className={`popupHeader ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIPopup.Header>
);

PopupHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default PopupHeader;
