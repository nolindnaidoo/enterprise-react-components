import React from 'react';
import PropTypes from 'prop-types';
import { Label as SUILabel } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const LabelDetail = props => (
  <SUILabel.Detail
    as={props.as}
    className={`labelDetail ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUILabel.Detail>
);

LabelDetail.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default LabelDetail;
