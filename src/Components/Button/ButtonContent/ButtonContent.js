import React from 'react';
import PropTypes from 'prop-types';
import { Button as SUIButton } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ButtonContent = props => (
  <SUIButton.Content
    as={props.as}
    className={`buttonContent ${props.className}`}
    hidden={props.hidden}
    style={props.style}
    visible={props.visible}
  >
    {props.children}
  </SUIButton.Content>
);

ButtonContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  style: stylePropType,
  visible: PropTypes.bool
};

export default ButtonContent;
