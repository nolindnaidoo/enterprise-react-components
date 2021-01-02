import React from 'react';
import PropTypes from 'prop-types';
import { Tab as SUITab } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const TabPane = props => (
  <SUITab.Pane
    active={props.active}
    as={props.as}
    className={`tabPane ${props.className}`}
    loading={props.loading}
    style={props.style}
  >
    {props.children}
  </SUITab.Pane>
);

TabPane.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  loading: PropTypes.bool,
  style: stylePropType
};

export default TabPane;
