import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer as SUIDimmer } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Dimmer = props => (
  <SUIDimmer
    active={props.active}
    as={props.as}
    className={`dimmer ${props.className}`}
    disabled={props.disabled}
    inverted={props.inverted}
    onClick={props.onClick}
    onClickOutside={props.onClickOutside}
    page={props.page}
    simple={props.simple}
    style={props.style}
  >
    {props.children}
  </SUIDimmer>
);

Dimmer.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  inverted: PropTypes.bool,
  onClick: PropTypes.func,
  onClickOutside: PropTypes.func,
  page: PropTypes.bool,
  simple: PropTypes.bool,
  style: stylePropType
};

export default Dimmer;
