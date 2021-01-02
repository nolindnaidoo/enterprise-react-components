import React from 'react';
import PropTypes from 'prop-types';
import { Segment as SUISegment } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const SegmentGroup = props => (
  <SUISegment.Group
    as={props.as}
    className={`segmentGroup ${props.className}`}
    compact={props.compact}
    horizontal={props.horizontal}
    piled={props.piled}
    raised={props.raised}
    size={props.size}
    stacked={props.stacked}
    style={props.style}
  >
    {props.children}
  </SUISegment.Group>
);

SegmentGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  horizontal: PropTypes.bool,
  piled: PropTypes.bool,
  raised: PropTypes.bool,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'big']),
  stacked: PropTypes.bool,
  style: stylePropType
};

export default SegmentGroup;
