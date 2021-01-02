import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as SUIAccordion } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const AccordionTitle = props => (
  <SUIAccordion.Title
    active={props.active}
    as={props.as}
    className={`accordionTitle ${props.className}`}
    index={props.index}
    onClick={props.onClick}
    style={props.style}
  >
    {props.children}
  </SUIAccordion.Title>
);

AccordionTitle.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  index: PropTypes.number,
  onClick: PropTypes.func,
  style: stylePropType
};

export default AccordionTitle;
