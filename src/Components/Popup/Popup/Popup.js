import React from 'react';
import PropTypes from 'prop-types';
import { Popup as SUIPopup } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Popup = props => (
  <SUIPopup
    as={props.as}
    basic={props.basic}
    className={`popup ${props.className}`}
    flowing={props.flowing}
    header={props.header}
    hideOnScroll={props.hideOnScroll}
    horizontalOffset={props.horizontalOffset}
    hoverable={props.hoverable}
    inverted={props.inverted}
    on={props.on}
    onClose={props.onClose}
    onMount={props.onMount}
    onOpen={props.onOpen}
    onUnmount={props.onUnmount}
    position={props.position}
    size={props.size}
    style={props.style}
    trigger={props.trigger}
    verticalOffset={props.verticalOffset}
    wide={props.wide}
  >
    {props.children}
  </SUIPopup>
);

Popup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  basic: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  flowing: PropTypes.bool,
  header: PropTypes.node,
  hideOnScroll: PropTypes.bool,
  horizontalOffset: PropTypes.number,
  hoverable: PropTypes.bool,
  inverted: PropTypes.bool,
  on: PropTypes.oneOfType([
    PropTypes.oneOf(['hover', 'click', 'focus']),
    PropTypes.arrayOf(PropTypes.oneOf(['hover', 'click', 'focus']))
  ]),
  onClose: PropTypes.func,
  onMount: PropTypes.func,
  onOpen: PropTypes.func,
  onUnmount: PropTypes.func,
  position: PropTypes.oneOf([
    'top left',
    'top right',
    'bottom right',
    'bottom left',
    'right center',
    'left center',
    'top center',
    'bottom center'
  ]),
  size: PropTypes.oneOf(['huge', 'large', 'mini', 'small', 'tiny']),
  style: stylePropType,
  trigger: PropTypes.node,
  verticalOffset: PropTypes.number,
  wide: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])])
};

export default Popup;
