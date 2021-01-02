import React from 'react';
import PropTypes from 'prop-types';
import { Card as SUICard } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Card = props => (
  <SUICard
    as={props.as}
    centered={props.centered}
    className={`card ${props.className}`}
    color={props.color}
    description={props.description}
    extra={props.extra}
    fluid={props.fluid}
    header={props.header}
    href={props.href}
    image={props.image}
    link={props.link}
    meta={props.meta}
    onClick={props.onClick}
    raised={props.raised}
    style={props.style}
  >
    {props.children}
  </SUICard>
);

Card.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black'
  ]),
  description: PropTypes.string,
  extra: PropTypes.node,
  fluid: PropTypes.bool,
  header: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.bool,
  meta: PropTypes.node,
  onClick: PropTypes.func,
  raised: PropTypes.bool,
  style: stylePropType
};

export default Card;
