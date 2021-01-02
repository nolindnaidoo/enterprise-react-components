import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as SUIBreadcrumb } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const BreadcrumbSection = props => (
  <SUIBreadcrumb.Section
    active={props.active}
    as={props.as}
    className={`breadcrumbSection ${props.className}`}
    content={props.content}
    href={props.href}
    link={props.link}
    onClick={props.onClick}
    style={props.style}
  >
    {props.children}
  </SUIBreadcrumb.Section>
);

BreadcrumbSection.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.node,
  href: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  link: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onClick: PropTypes.func,
  style: stylePropType
};

export default BreadcrumbSection;
