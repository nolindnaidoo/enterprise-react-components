import React from 'react';
import PropTypes from 'prop-types';
import { Card as SUICard } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const CardHeader = props => (
  <SUICard.Header
    as={props.as}
    className={`cardHeader ${props.className}`}
    style={props.style}
    textAlign={props.textAlign}
  >
    {props.children}
  </SUICard.Header>
);

CardHeader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType,
  textAlign: PropTypes.oneOf(['left', 'center', 'right'])
};

export default CardHeader;
