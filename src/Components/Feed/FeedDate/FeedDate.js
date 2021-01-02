import React from 'react';
import PropTypes from 'prop-types';
import { Feed as SUIFeed } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FeedDate = props => (
  <SUIFeed.Date
    as={props.as}
    className={`feedDate ${props.className}`}
    content={props.content}
    style={props.style}
  >
    {props.children}
  </SUIFeed.Date>
);

FeedDate.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  style: stylePropType
};

export default FeedDate;
