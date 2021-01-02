import React from 'react';
import PropTypes from 'prop-types';
import { Item as SUIItem } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ItemContent = props => (
  <SUIItem.Content
    as={props.as}
    className={`itemContent ${props.className}`}
    style={props.style}
    verticalAlign={props.verticalAlign}
  >
    {props.children}
  </SUIItem.Content>
);

ItemContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: stylePropType,
  verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top'])
};

export default ItemContent;
