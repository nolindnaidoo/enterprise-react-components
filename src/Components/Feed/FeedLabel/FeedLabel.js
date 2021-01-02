import React from 'react';
import PropTypes from 'prop-types';
import { Feed as SUIFeed } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FeedLabel = props => (
  <SUIFeed.Label
    as={props.as}
    className={`feedLabel ${props.className}`}
    content={props.content}
    icon={props.icon}
    image={props.image}
    style={props.style}
  >
    {props.children}
  </SUIFeed.Label>
);

FeedLabel.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  icon: PropTypes.string,
  image: PropTypes.string,
  style: stylePropType
};

export default FeedLabel;
