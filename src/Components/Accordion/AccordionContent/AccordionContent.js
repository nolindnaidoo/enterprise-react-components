import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as SUIAccordion } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const AccordionContent = props => (
  <SUIAccordion.Content
    active={props.active}
    as={props.as}
    className={`accordionContent ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIAccordion.Content>
);

AccordionContent.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default AccordionContent;
