import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer as SUIDimmer } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const DimmerDimmable = props => (
  <SUIDimmer.Dimmable
    as={props.as}
    blurring={props.blurring}
    className={`dimmerDimmable ${props.className}`}
    dimmed={props.dimmed}
    style={props.style}
  >
    {props.children}
  </SUIDimmer.Dimmable>
);

DimmerDimmable.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  blurring: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  dimmed: PropTypes.bool,
  style: stylePropType
};

export default DimmerDimmable;
