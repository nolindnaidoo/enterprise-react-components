import React from 'react';
import PropTypes from 'prop-types';
import { Label as SUILabel } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const LabelGroup = props => (
  <SUILabel.Group
    as={props.as}
    circular={props.circular}
    className={`labelGroup ${props.className}`}
    color={props.color}
    size={props.size}
    style={props.style}
    tag={props.tag}
  >
    {props.children}
  </SUILabel.Group>
);

LabelGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  circular: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black'
  ]),
  size: PropTypes.oneOf([
    '',
    'mini',
    'tiny',
    'small',
    'medium',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  style: stylePropType,
  tag: PropTypes.bool
};

export default LabelGroup;
