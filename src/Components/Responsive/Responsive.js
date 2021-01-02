import React from 'react';
import PropTypes from 'prop-types';
import { Responsive as SUIResponsive } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Responsive = props => (
  <SUIResponsive
    as={props.as}
    className={`responsive ${props.className}`}
    fireOnMount={props.fireOnMount}
    maxWidth={props.maxWidth}
    minWidth={props.minWidth}
    onUpdate={props.onUpdate}
    style={props.style}
  >
    {props.children}
  </SUIResponsive>
);

Responsive.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  fireOnMount: PropTypes.bool,
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onUpdate: PropTypes.func,
  style: stylePropType
};

export default Responsive;
