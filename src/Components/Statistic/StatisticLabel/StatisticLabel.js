import React from 'react';
import PropTypes from 'prop-types';
import { Statistic as SUIStatistic } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const StatisticLabel = props => (
  <SUIStatistic.Label
    as={props.as}
    className={`statisticLabel ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIStatistic.Label>
);

StatisticLabel.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default StatisticLabel;
