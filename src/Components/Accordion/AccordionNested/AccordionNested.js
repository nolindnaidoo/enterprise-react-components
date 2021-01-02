import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as SUIAccordion } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const AccordionNested = props => (
  <SUIAccordion.Accordion
    activeIndex={props.activeIndex}
    as={props.as}
    className={`accordionNested ${props.className}`}
    defaultActiveIndex={props.defaultActiveIndex}
    exclusive={props.exclusive}
    onTitleClick={props.onTitleClick}
    panels={props.panels}
    style={props.style}
  >
    {props.children}
  </SUIAccordion.Accordion>
);

AccordionNested.propTypes = {
  activeIndex: PropTypes.number,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  defaultActiveIndex: PropTypes.number,
  exclusive: PropTypes.bool,
  onTitleClick: PropTypes.func,
  panels: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  style: stylePropType
};

export default AccordionNested;
