import React from 'react';
import PropTypes from 'prop-types';
import { Reveal as SUIReveal } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const RevealContent = props => (
  <SUIReveal.Content
    as={props.as}
    className={`revealContent ${props.className}`}
    hidden={props.hidden}
    style={props.style}
    visible={props.visible}
  >
    {props.children}
  </SUIReveal.Content>
);

RevealContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  style: stylePropType,
  visible: PropTypes.bool
};

export default RevealContent;
