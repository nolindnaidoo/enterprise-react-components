import React from 'react';
import PropTypes from 'prop-types';
import { List as SUIList } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const List = props => (
  <SUIList
    animated={props.animated}
    as={props.as}
    bulleted={props.bulleted}
    celled={props.celled}
    className={`list ${props.className}`}
    divided={props.divided}
    floated={props.floated}
    horizontal={props.horizontal}
    inverted={props.inverted}
    items={props.items}
    link={props.link}
    onItemClick={props.onItemClick}
    ordered={props.ordered}
    relaxed={props.relaxed}
    selection={props.selection}
    size={props.size}
    style={props.style}
    verticalalign={props.verticalalign}
  >
    {props.children}
  </SUIList>
);

List.propTypes = {
  animated: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  bulleted: PropTypes.bool,
  celled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  divided: PropTypes.bool,
  floated: PropTypes.oneOf(['left', 'right']),
  horizontal: PropTypes.bool,
  inverted: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.string),
  link: PropTypes.bool,
  onItemClick: PropTypes.func,
  ordered: PropTypes.bool,
  relaxed: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  selection: PropTypes.bool,
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'medium',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  style: stylePropType,
  verticalalign: PropTypes.string
};

export default List;
