import React from 'react';
import PropTypes from 'prop-types';
import { Feed as SUIFeed } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FeedContent = props => (
  <SUIFeed.Content
    as={props.as}
    className={`feedContent ${props.className}`}
    content={props.content}
    date={props.date}
    extraImages={props.extraImages}
    extraText={props.extraText}
    meta={props.meta}
    summary={props.summary}
    style={props.style}
  >
    {props.children}
  </SUIFeed.Content>
);

FeedContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  date: PropTypes.string,
  extraImages: PropTypes.arrayOf(PropTypes.string),
  extraText: PropTypes.string,
  meta: PropTypes.string,
  summary: PropTypes.string,
  style: stylePropType
};

export default FeedContent;
