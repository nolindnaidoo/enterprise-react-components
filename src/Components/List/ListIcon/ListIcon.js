import React from 'react';
import PropTypes from 'prop-types';
import { List as SUIList } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ListIcon = props => (
  <SUIList.Icon
    className={`listIcon ${props.className}`}
    style={props.style}
    verticalalign={props.verticalalign}
  />
);

ListIcon.propTypes = {
  className: PropTypes.string,
  style: stylePropType,
  verticalalign: PropTypes.string
};

export default ListIcon;
