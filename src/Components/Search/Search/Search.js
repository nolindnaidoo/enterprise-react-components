import React from 'react';
import PropTypes from 'prop-types';
import { Search as SUISearch } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Search = props => (
  <SUISearch
    aligned={props.aligned}
    as={props.as}
    category={props.category}
    categoryRenderer={props.categoryRenderer}
    className={`search ${props.className}`}
    defaultOpen={props.defaultOpen}
    defaultValue={props.defaultValue}
    fluid={props.fluid}
    icon={props.icon}
    input={props.input}
    loading={props.loading}
    minCharacters={props.minCharacters}
    noResultsDescription={props.noResultsDescription}
    noResultsMessage={props.noResultsMessage}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
    onMouseDown={props.onMouseDown}
    onResultSelect={props.onResultSelect}
    onSearchChange={props.onSearchChange}
    onSelectionChange={props.onSelectionChange}
    open={props.open}
    resultRenderer={props.resultRenderer}
    results={props.results}
    selectFirstResult={props.selectFirstResult}
    showNoResults={props.showNoResults}
    size={props.size}
    style={props.style}
    value={props.value}
  />
);

Search.propTypes = {
  aligned: PropTypes.oneOf(['left', 'right']),
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  category: PropTypes.bool,
  categoryRenderer: PropTypes.func,
  className: PropTypes.string,
  defaultOpen: PropTypes.bool,
  defaultValue: PropTypes.string,
  fluid: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  input: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.string
  ]),
  loading: PropTypes.bool,
  minCharacters: PropTypes.number,
  noResultsDescription: PropTypes.node,
  noResultsMessage: PropTypes.node,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseDown: PropTypes.func,
  onResultSelect: PropTypes.func,
  onSearchChange: PropTypes.func,
  onSelectionChange: PropTypes.func,
  open: PropTypes.bool,
  resultRenderer: PropTypes.func,
  results: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  selectFirstResult: PropTypes.bool,
  showNoResults: PropTypes.bool,
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  style: stylePropType,
  value: PropTypes.string
};

export default Search;
