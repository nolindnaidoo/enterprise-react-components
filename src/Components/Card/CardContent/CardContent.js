import React from 'react';
import PropTypes from 'prop-types';
import { Card as SUICard } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const CardContent = props => (
  <SUICard.Content
    as={props.as}
    className={`cardContent ${props.className}`}
    description={props.description}
    extra={props.extra}
    header={props.header}
    meta={props.meta}
    style={props.style}
    textAlign={props.textAlign}
  >
    {props.children}
  </SUICard.Content>
);

CardContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  extra: PropTypes.bool,
  header: PropTypes.string,
  meta: PropTypes.node,
  style: stylePropType,
  textAlign: PropTypes.oneOf(['left', 'center', 'right'])
};

export default CardContent;
