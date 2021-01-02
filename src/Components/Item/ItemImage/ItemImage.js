import React from 'react';
import PropTypes from 'prop-types';
import { Item as SUIItem } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ItemImage = props => (
  <SUIItem.Image
    className={`itemImage ${props.className}`}
    size={props.size}
    src={props.src}
    style={props.style}
  />
);

ItemImage.propTypes = {
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
  src: PropTypes.string,
  style: stylePropType
};

export default ItemImage;
