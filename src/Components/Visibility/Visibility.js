import React from 'react';
import PropTypes from 'prop-types';
import { Visibility as SUIVisibility } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Visibility = props => (
  <SUIVisibility
    as={props.as}
    className={`visibility ${props.className}`}
    context={props.context}
    continuous={props.continuous}
    offset={props.offset}
    onBottomPassed={props.onBottomPassed}
    onBottomPassedReverse={props.onBottomPassedReverse}
    onBottomVisible={props.onBottomVisible}
    onBottomVisibleReverse={props.onBottomVisibleReverse}
    onOffScreen={props.onOffScreen}
    onOnScreen={props.onOnScreen}
    onPassed={props.onPassed}
    onPassing={props.onPassing}
    onPassingReverse={props.onPassingReverse}
    onTopPassed={props.onTopPassed}
    onTopPassedReverse={props.onTopPassedReverse}
    onTopVisible={props.onTopVisible}
    onTopVisibleReverse={props.onTopVisibleReverse}
    onUpdate={props.onUpdate}
    once={props.once}
    style={props.style}
  >
    {props.children}
  </SUIVisibility>
);

Visibility.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  context: PropTypes.object, //eslint-disable-line
  continuous: PropTypes.bool,
  offset: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    ),
    PropTypes.number,
    PropTypes.string
  ]),
  onBottomPassed: PropTypes.func,
  onBottomPassedReverse: PropTypes.func,
  onBottomVisible: PropTypes.func,
  onBottomVisibleReverse: PropTypes.func,
  onOffScreen: PropTypes.func,
  onOnScreen: PropTypes.func,
  onPassed: PropTypes.object, //eslint-disable-line
  onPassing: PropTypes.func,
  onPassingReverse: PropTypes.func,
  onTopPassed: PropTypes.func,
  onTopPassedReverse: PropTypes.func,
  onTopVisible: PropTypes.func,
  onTopVisibleReverse: PropTypes.func,
  onUpdate: PropTypes.func,
  once: PropTypes.bool,
  style: stylePropType
};

export default Visibility;
