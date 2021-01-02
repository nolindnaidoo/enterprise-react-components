import React from 'react';
import PropTypes from 'prop-types';
import { Image as SUIImage } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ImageGroup = props => (
  <SUIImage.Group
    as={props.as}
    className={`imageGroup ${props.className}`}
    size={props.size}
    style={props.style}
  >
    {props.children}
  </SUIImage.Group>
);

ImageGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'medium',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  style: stylePropType
};

export default ImageGroup;
