import React from 'react';
import PropTypes from 'prop-types';
import { Rating as SUIRating } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Rating = props => (
  <SUIRating
    as={props.as}
    className={`rating ${props.className}`}
    clearable={props.clearable}
    defaultRating={props.defaultRating}
    disabled={props.disabled}
    icon={props.icon}
    maxRating={props.maxRating}
    onRate={props.onRate}
    rating={props.rating}
    size={props.size}
    style={props.style}
  />
);

Rating.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  clearable: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['auto'])]),
  defaultRating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(['star', 'heart']),
  maxRating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onRate: PropTypes.func,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'huge', 'massive']),
  style: stylePropType
};

export default Rating;
