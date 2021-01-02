import React from 'react';
import PropTypes from 'prop-types';
import { List as SUIList } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ListList = props => (
  <SUIList.List
    as={props.as}
    className={`listList ${props.className}`}
    style={props.style}
  >
    {props.children}
  </SUIList.List>
);

ListList.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: stylePropType
};

export default ListList;
