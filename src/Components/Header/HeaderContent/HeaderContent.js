import React from 'react';
import PropTypes from 'prop-types';
import { Header as SUIHeader } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const HeaderContent = props => (
  <SUIHeader.Content
    as={props.as}
    className={`headerContent ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIHeader.Content>
);

HeaderContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default HeaderContent;
