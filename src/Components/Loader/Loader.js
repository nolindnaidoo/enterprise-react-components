import React from 'react';
import PropTypes from 'prop-types';
import { Loader as SUILoader } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Loader = props => (
  <SUILoader
    active={props.active}
    as={props.as}
    className={`loader ${props.className}`}
    disabled={props.disabled}
    indeterminate={props.indeterminate}
    inline={props.inline}
    inverted={props.inverted}
    size={props.size}
    style={props.style}
  >
    {props.children}
  </SUILoader>
);

Loader.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  inline: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['centered'])]),
  inverted: PropTypes.bool,
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

export default Loader;
