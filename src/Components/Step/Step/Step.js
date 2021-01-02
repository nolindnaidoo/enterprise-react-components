import React from 'react';
import PropTypes from 'prop-types';
import { Step as SUIStep } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Step = props => (
  <SUIStep
    active={props.active}
    as={props.as}
    className={`step ${props.className}`}
    completed={props.completed}
    disabled={props.disabled}
    href={props.href}
    icon={props.icon}
    link={props.link}
    onClick={props.onClick}
    ordered={props.ordered}
    style={props.style}
  >
    {props.children}
  </SUIStep>
);

Step.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  completed: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.bool,
  onClick: PropTypes.func,
  ordered: PropTypes.bool,
  style: stylePropType
};

export default Step;
