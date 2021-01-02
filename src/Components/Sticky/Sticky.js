import React from 'react';
import PropTypes from 'prop-types';
import { Sticky as SUISticky } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Sticky = props => (
  <SUISticky
    active={props.active}
    as={props.as}
    bottomOffset={props.bottomOffset}
    className={`sticky ${props.className}`}
    context={props.context}
    offset={props.offset}
    onBottom={props.onBottom}
    onStick={props.onStick}
    onTop={props.onTop}
    onUnstick={props.onUnstick}
    pushing={props.pushing}
    scrollContext={props.scrollContext}
    style={props.style}
  >
    {props.children}
  </SUISticky>
);

Sticky.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  bottomOffset: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  context: PropTypes.object, //eslint-disable-line
  offset: PropTypes.number,
  onBottom: PropTypes.func,
  onStick: PropTypes.func,
  onTop: PropTypes.func,
  onUnstick: PropTypes.func,
  pushing: PropTypes.bool,
  scrollContext: PropTypes.object, //eslint-disable-line
  style: stylePropType
};

export default Sticky;
