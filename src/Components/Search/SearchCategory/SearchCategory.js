import React from 'react';
import PropTypes from 'prop-types';
import { Search as SUISearch } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const SearchCategory = props => (
  <SUISearch.Category
    active={props.active}
    as={props.as}
    className={`searchCategory ${props.className}`}
    content={props.content}
    name={props.name}
    renderer={props.renderer}
    results={props.results}
    style={props.style}
  >
    {props.children}
  </SUISearch.Category>
);

SearchCategory.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.node,
  name: PropTypes.string,
  renderer: PropTypes.func,
  results: PropTypes.node,
  style: stylePropType
};

export default SearchCategory;
