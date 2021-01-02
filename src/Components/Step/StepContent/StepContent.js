import React from 'react';
import PropTypes from 'prop-types';
import { Step as Steps } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const StepContent = props => (
  <Steps.Content
    as={props.as}
    className={`stepContent ${props.className}`}
    style={props.style}
  >
    {props.children}
  </Steps.Content>
);

StepContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default StepContent;
