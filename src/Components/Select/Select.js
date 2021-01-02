import React from 'react';
import PropTypes from 'prop-types';
import { Select as SUISelect } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Select = props => (
  <SUISelect
    basic={props.basic}
    button={props.button}
    className={`select ${props.className}`}
    compact={props.compact}
    defaultValue={props.defaultValue}
    direction={props.direction}
    disabled={props.disabled}
    error={props.error}
    floating={props.floating}
    fluid={props.fluid}
    header={props.header}
    icon={props.icon}
    loading={props.loading}
    multiple={props.multiple}
    noResultsMessage={props.noResultsMessage}
    onChange={props.onChange}
    onClick={props.onClick}
    onClose={props.onClose}
    onOpen={props.onOpen}
    onSearchChange={props.onSearchChange}
    open={props.open}
    placeholder={props.placeholder}
    pointing={props.pointing}
    options={props.options}
    scrolling={props.scrolling}
    search={props.search}
    searchQuery={props.searchQuery}
    style={props.style}
    upward={props.upward}
    value={props.value}
  />
);

Select.propTypes = {
  basic: PropTypes.bool,
  button: PropTypes.bool,
  className: PropTypes.string,
  compact: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  direction: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  floating: PropTypes.bool,
  fluid: PropTypes.bool,
  header: PropTypes.node,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  loading: PropTypes.bool,
  multiple: PropTypes.bool,
  noResultsMessage: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onSearchChange: PropTypes.func,
  open: PropTypes.bool,
  placeholder: PropTypes.string,
  pointing: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      'left',
      'right',
      'top',
      'top left',
      'top right',
      'bottom',
      'bottom left',
      'bottom right'
    ])
  ]),
  options: PropTypes.arrayOf(PropTypes.object),
  scrolling: PropTypes.bool,
  search: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  searchQuery: PropTypes.string,
  style: stylePropType,
  upward: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number])
    )
  ])
};

export default Select;
