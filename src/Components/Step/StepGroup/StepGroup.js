import React from 'react';
import PropTypes from 'prop-types';
import { Step as Steps } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const StepGroup = props => (
  <Steps.Group
    as={props.as}
    attached={props.attached}
    className={`stepGroup ${props.className}`}
    fluid={props.fluid}
    ordered={props.ordered}
    size={props.size}
    stackable={props.stackable}
    style={props.style}
    unstackable={props.unstackable}
    vertical={props.vertical}
    widths={props.widths}
  >
    {props.children}
  </Steps.Group>
);

StepGroup.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  attached: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['top', 'bottom'])
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  ordered: PropTypes.bool,
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  stackable: PropTypes.oneOf(['tablet']),
  style: stylePropType,
  unstackable: PropTypes.bool,
  vertical: PropTypes.bool,
  widths: PropTypes.number
};

export default StepGroup;
