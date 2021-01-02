import React from 'react';
import PropTypes from 'prop-types';
import { Image as SUIImage } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Image = props => (
  <SUIImage
    as={props.as}
    avatar={props.avatar}
    bordered={props.bordered}
    centered={props.centered}
    circular={props.circular}
    className={`image ${props.className}`}
    disabled={props.disabled}
    floated={props.floated}
    fluid={props.fluid}
    hidden={props.hidden}
    href={props.href}
    inline={props.inline}
    label={props.label}
    rounded={props.rounded}
    spaced={props.spaced}
    src={props.src}
    size={props.size}
    style={props.style}
    verticalAlign={props.verticalAlign}
    wrapped={props.wrapped}
  >
    {props.children}
  </SUIImage>
);

Image.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  avatar: PropTypes.bool,
  bordered: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
  circular: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  floated: PropTypes.oneOf(['left', 'right']),
  fluid: PropTypes.bool,
  hidden: PropTypes.bool,
  href: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.node,
  rounded: PropTypes.bool,
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
  spaced: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['left', 'right'])
  ]),
  src: PropTypes.string,
  style: stylePropType,
  verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top']),
  wrapped: PropTypes.bool
};

export default Image;
