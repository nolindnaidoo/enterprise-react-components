import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as SUIAccordion } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Accordion = props => (
  <SUIAccordion
    className={`accordion ${props.className}`}
    fluid={props.fluid}
    inverted={props.inverted}
    style={props.style}
    styled={props.styled}
  >
    {props.children}
  </SUIAccordion>
);

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  inverted: PropTypes.bool,
  style: stylePropType,
  styled: PropTypes.bool
};

export default Accordion;
