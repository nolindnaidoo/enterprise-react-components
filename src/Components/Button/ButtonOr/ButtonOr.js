import React from 'react';
import PropTypes from 'prop-types';
import { Button as SUIButton } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ButtonOr = props => (
  <SUIButton.Or
    as={props.as}
    className={`buttonOr ${props.className}`}
    style={props.style}
    text={props.text}
  />
);

ButtonOr.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  style: stylePropType,
  text: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ButtonOr;
