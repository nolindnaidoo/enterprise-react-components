import React from 'react';
import PropTypes from 'prop-types';
import { Search as SUISearch } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const SearchResults = props => (
  <SUISearch.Results
    as={props.as}
    className={`searchResults ${props.className}`}
    content={props.content}
    style={props.style}
  >
    {props.children}
  </SUISearch.Results>
);

SearchResults.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  content: PropTypes.node,
  style: stylePropType
};

export default SearchResults;
