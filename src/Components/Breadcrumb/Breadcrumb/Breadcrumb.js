import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as SUIBreadcrumb } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Breadcrumb = props => (
  <SUIBreadcrumb
    as={props.as}
    className={`breadcrumb ${props.className}`}
    divider={props.divider}
    icon={props.icon}
    sections={props.sections}
    size={props.size}
    style={props.style}
  >
    {props.children}
  </SUIBreadcrumb>
);

Breadcrumb.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  divider: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  icon: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      active: PropTypes.bool,
      content: PropTypes.node,
      link: PropTypes.bool
    })
  ),
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  style: stylePropType
};

export default Breadcrumb;
