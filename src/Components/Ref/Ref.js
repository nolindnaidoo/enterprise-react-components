import React from 'react';
import PropTypes from 'prop-types';
import { Ref as SUIRef } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Ref = props => (
  <SUIRef
    className={`ref ${props.className}`}
    innerRef={props.innerRef}
    style={props.style}
  >
    {props.children}
  </SUIRef>
);

Ref.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  innerRef: PropTypes.func,
  style: stylePropType
};

export default Ref;
