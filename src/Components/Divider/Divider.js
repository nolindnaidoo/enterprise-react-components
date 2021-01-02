import React from 'react';
import PropTypes from 'prop-types';
import { Divider as SUIDivider } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';
import defaultStyles from './styles';

const Divider = props => (
  <SUIDivider
    as={props.as}
    className={`divider ${props.className}`}
    clearing={props.clearing}
    fitted={props.fitted}
    hidden={props.hidden}
    horizontal={props.horizontal}
    inverted={props.inverted}
    section={props.section}
    style={{ ...defaultStyles, ...props.style }}
    vertical={props.vertical}
  >
    {props.children}
  </SUIDivider>
);

Divider.propTypes = {
  as: PropTypes.node,
  children: PropTypes.node,
  className: PropTypes.string,
  clearing: PropTypes.bool,
  fitted: PropTypes.bool,
  hidden: PropTypes.bool,
  horizontal: PropTypes.bool,
  inverted: PropTypes.bool,
  section: PropTypes.bool,
  style: stylePropType,
  vertical: PropTypes.bool
};

export default Divider;
