import React from 'react';
import PropTypes from 'prop-types';
import { Search as SUISearch } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const SearchResult = props => (
  <SUISearch.Result
    active={props.active}
    as={props.as}
    className={`searchResult ${props.className}`}
    content={props.content}
    description={props.description}
    id={props.id}
    image={props.image}
    onClick={props.onClick}
    price={props.price}
    renderer={props.renderer}
    style={props.style}
    title={props.title}
  />
);

SearchResult.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  content: PropTypes.node,
  description: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  image: PropTypes.string,
  onClick: PropTypes.func,
  price: PropTypes.string,
  renderer: PropTypes.func,
  style: stylePropType,
  title: PropTypes.string
};

export default SearchResult;
