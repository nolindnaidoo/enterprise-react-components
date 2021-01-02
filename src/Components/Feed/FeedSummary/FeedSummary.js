import React from 'react';
import PropTypes from 'prop-types';
import { Feed as SUIFeed } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FeedSummary = props => (
  <SUIFeed.Summary
    as={props.as}
    className={`feedSummary ${props.className}`}
    content={props.content}
    date={props.date}
    style={props.style}
    user={props.user}
  >
    {props.children}
  </SUIFeed.Summary>
);

FeedSummary.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  date: PropTypes.string,
  style: stylePropType,
  user: PropTypes.string
};

export default FeedSummary;
