import React from 'react';
import PropTypes from 'prop-types';
import { Header as SUIHeader } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Subheader = props => (
  <SUIHeader.Subheader
    as={props.as}
    className={`subheader ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIHeader.Subheader>
);

Subheader.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default Subheader;
