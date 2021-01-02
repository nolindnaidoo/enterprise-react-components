import React from 'react';
import PropTypes from 'prop-types';
import { Step as Steps } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const StepDescription = props => (
  <Steps.Description
    as={props.as}
    className={`stepDescription ${props.className}`}
    style={props.style}
  >
    {props.children}
  </Steps.Description>
);

StepDescription.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default StepDescription;
