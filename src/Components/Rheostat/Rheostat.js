import React from 'react';
import PropTypes from 'prop-types';
import AirbnbRheostat from 'rheostat';
import stylePropType from 'react-style-proptype';

const Rheostat = props => (
  <AirbnbRheostat
    algorithm={props.algorithm}
    className={`rheostat ${props.className}`}
    disabled={props.disabled}
    getNextHandlePosition={props.getNextHandlePosition}
    handle={props.handle}
    max={props.max}
    min={props.min}
    onChange={props.onChange}
    onClick={props.onClick}
    onKeyPress={props.onKeyPress}
    onSliderDragEnd={props.onSliderDragEnd}
    onSliderDragMove={props.onSliderDragMove}
    onSliderDragStart={props.onSliderDragStart}
    onValuesUpdated={props.onValuesUpdated}
    orientation={props.orientation}
    pitComponent={props.pitComponent}
    pitPoints={props.pitPoints}
    progressBar={props.progressBar}
    snap={props.snap}
    snapPoints={props.snapPoints}
    style={props.style}
    values={props.values}
  />
);

Rheostat.propTypes = {
  algorithm: PropTypes.shape({
    getValue: PropTypes.func,
    getPosition: PropTypes.func
  }),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  getNextHandlePosition: PropTypes.func,
  handle: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  onSliderDragEnd: PropTypes.func,
  onSliderDragMove: PropTypes.func,
  onSliderDragStart: PropTypes.func,
  onValuesUpdated: PropTypes.func,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  pitComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  pitPoints: PropTypes.arrayOf(PropTypes.number),
  progressBar: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  snap: PropTypes.bool,
  snapPoints: PropTypes.arrayOf(PropTypes.number),
  style: stylePropType,
  values: PropTypes.arrayOf(PropTypes.number)
};

export default Rheostat;
