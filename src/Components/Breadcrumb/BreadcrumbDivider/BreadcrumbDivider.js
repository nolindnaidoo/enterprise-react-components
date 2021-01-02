import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as SUIBreadcrumb } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const BreadcrumbDivider = props => (
  <SUIBreadcrumb.Divider
    as={props.as}
    className={`breadcrumbDivider ${props.className}`}
    content={props.content}
    icon={props.icon}
    style={props.style}
  >
    {props.children}
  </SUIBreadcrumb.Divider>
);

BreadcrumbDivider.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.node,
  icon: PropTypes.string,
  style: stylePropType
};

export default BreadcrumbDivider;
