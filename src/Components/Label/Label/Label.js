import React from 'react';
import PropTypes from 'prop-types';
import { Label as SUILabel } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Label = props => (
  <SUILabel
    active={props.active}
    as={props.as}
    attached={props.attached}
    basic={props.basic}
    circular={props.circular}
    className={`label ${props.className}`}
    color={props.color}
    corner={props.corner}
    floating={props.floating}
    horizontal={props.horizontal}
    icon={props.icon}
    image={props.image}
    onClick={props.onClick}
    onRemove={props.onRemove}
    pointing={props.pointing}
    ribbon={props.ribbon}
    size={props.size}
    style={props.style}
    tag={props.tag}
  >
    {props.children}
  </SUILabel>
);

Label.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  attached: PropTypes.oneOf([
    '',
    'top',
    'bottom',
    'top right',
    'top left',
    'bottom left',
    'bottom right'
  ]),
  basic: PropTypes.bool,
  circular: PropTypes.bool,
  children: PropTypes.node,
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
  corner: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['left', 'right'])
  ]),
  floating: PropTypes.bool,
  horizontal: PropTypes.bool,
  icon: PropTypes.string,
  image: PropTypes.bool,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  pointing: PropTypes.oneOf(['', 'above', 'below', 'left', 'right']),
  ribbon: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['right'])]),
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

export default Label;
