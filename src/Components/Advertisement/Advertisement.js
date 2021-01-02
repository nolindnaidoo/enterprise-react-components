import React from 'react';
import PropTypes from 'prop-types';
import { Advertisement as SUIAdvertisement } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Advertisement = props => (
  <SUIAdvertisement
    as={props.as}
    centered={props.centered}
    className={`advertisement ${props.className}`}
    style={props.style}
    test={props.test}
    unit={props.unit}
  >
    {props.children}
  </SUIAdvertisement>
);

Advertisement.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType,
  test: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ]),
  unit: PropTypes.oneOf([
    'medium rectangle',
    'large rectangle',
    'vertical rectangle',
    'small rectangle',
    'mobile banner',
    'banner',
    'vertical banner',
    'top banner',
    'half banner',
    'button',
    'square button',
    'small button',
    'skyscraper',
    'wide skyscraper',
    'leaderboard',
    'large leaderboard',
    'mobile leaderboard',
    'billboard',
    'panorama',
    'netboard',
    'half page',
    'square',
    'small square'
  ])
};

export default Advertisement;
