import React from 'react';
import PropTypes from 'prop-types';
import { List as SUIList } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const ListContent = props => (
  <SUIList.Content
    as={props.as}
    className={`listContent ${props.className}`}
    description={props.description}
    floated={props.floated}
    header={props.header}
    style={props.style}
    verticalAlign={props.verticalAlign}
  >
    {props.children}
  </SUIList.Content>
);

ListContent.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
  className: PropTypes.string,
  description: PropTypes.string,
  floated: PropTypes.string,
  header: PropTypes.string,
  style: stylePropType,
  verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top'])
};

export default ListContent;
