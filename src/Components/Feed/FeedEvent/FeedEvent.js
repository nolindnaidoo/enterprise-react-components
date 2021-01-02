import React from 'react';
import PropTypes from 'prop-types';
import { Feed as SUIFeed } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const FeedEvent = props => (
  <SUIFeed.Event
    as={props.as}
    className={`feedEvent ${props.className}`}
    content={props.content}
    date={props.date}
    extraImages={props.extraImages}
    extraText={props.extraText}
    icon={props.icon}
    image={props.image}
    meta={props.meta}
    style={props.style}
    summary={props.summary}
  >
    {props.children}
  </SUIFeed.Event>
);

FeedEvent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  date: PropTypes.string,
  extraImages: PropTypes.arrayOf(PropTypes.string),
  extraText: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.string,
  style: stylePropType,
  summary: PropTypes.string
};

export default FeedEvent;
