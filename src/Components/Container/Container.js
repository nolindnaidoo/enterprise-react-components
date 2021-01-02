import React from 'react';
import PropTypes from 'prop-types';
import { Container as SUIContainer } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Container = props => (
  <SUIContainer
    as={props.as}
    className={`container ${props.className}`}
    fluid={props.fluid}
    style={props.style}
    text={props.text}
    textAlign={props.textAlign}
  >
    {props.children}
  </SUIContainer>
);

Container.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  style: stylePropType,
  text: PropTypes.bool,
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justified'])
};

export default Container;
