import React from 'react';
import PropTypes from 'prop-types';
import { Tab as SUITab } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Tab = props => (
  <SUITab
    activeIndex={props.activeIndex}
    as={props.as}
    className={`tab ${props.className}`}
    defaultActiveIndex={props.defaultActiveIndex}
    grid={props.grid}
    menu={props.menu}
    onTabChange={props.onTabChange}
    panes={props.panes}
    renderActiveOnly={props.renderActiveOnly}
    style={props.style}
  />
);

Tab.propTypes = {
  activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  defaultActiveIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  grid: PropTypes.arrayOf({
    paneWidth: PropTypes.number,
    tabWidth: PropTypes.number
  }),
  menu: PropTypes.arrayOf({
    attached: PropTypes.bool,
    tabular: PropTypes.bool,
    aligned: PropTypes.string
  }),
  onTabChange: PropTypes.func,
  panes: PropTypes.arrayOf(
    PropTypes.shape({
      menuItem: PropTypes.string,
      render: PropTypes.func
    })
  ),
  renderActiveOnly: PropTypes.bool,
  style: stylePropType
};

export default Tab;
