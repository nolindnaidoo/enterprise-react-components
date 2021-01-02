import React from 'react';
import PropTypes from 'prop-types';
import { Popup as SUIPopup } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const PopupContent = props => (
  <SUIPopup.Content
    as={props.as}
    className={`popupContent ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIPopup.Content>
);

PopupContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default PopupContent;
