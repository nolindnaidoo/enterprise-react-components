import React from 'react';
import PropTypes from 'prop-types';
import { Card as SUICard } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const CardDescription = props => (
  <SUICard.Description
    as={props.as}
    className={`cardDescription ${props.className}`}
    style={props.style}
    textAlign={props.textAlign}
  >
    {props.children}
  </SUICard.Description>
);

CardDescription.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType,
  textAlign: PropTypes.oneOf(['left', 'center', 'right'])
};

export default CardDescription;
