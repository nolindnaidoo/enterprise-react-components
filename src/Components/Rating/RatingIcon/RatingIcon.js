import React from 'react';
import PropTypes from 'prop-types';
import { Rating as SUIRating } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const RatingIcon = props => (
  <SUIRating.Icon
    active={props.active}
    as={props.as}
    className={`ratingIcon ${props.className}`}
    index={props.index}
    onClick={props.onClick}
    onKeyUp={props.onKeyUp}
    onMouseEnter={props.onMouseEnter}
    selected={props.selected}
    style={props.style}
  />
);

RatingIcon.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  index: PropTypes.number,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseEnter: PropTypes.func,
  selected: PropTypes.bool,
  style: stylePropType
};

export default RatingIcon;
