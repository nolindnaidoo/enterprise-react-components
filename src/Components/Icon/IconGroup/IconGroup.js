import React from 'react';
import PropTypes from 'prop-types';
import { Icon as SUIIcon } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const IconGroup = props => (
  <SUIIcon.Group
    as={props.as}
    className={`iconGroup ${props.className}`}
    size={props.size}
    style={props.style}
  >
    {props.children}
  </SUIIcon.Group>
);

IconGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
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

export default IconGroup;
