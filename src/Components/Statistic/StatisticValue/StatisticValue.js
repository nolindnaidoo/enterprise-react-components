import React from 'react';
import PropTypes from 'prop-types';
import { Statistic as SUIStatistic } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const StatisticValue = props => (
  <SUIStatistic.Value
    as={props.as}
    className={`statisticValue ${props.className}`}
    style={props.style}
    text={props.text}
  >
    {props.children}
  </SUIStatistic.Value>
);

StatisticValue.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType,
  text: PropTypes.bool
};

export default StatisticValue;
