import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown as SUIDropdown } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Dropdown = props => (
  <SUIDropdown
    additionLabel={props.additionLabel}
    additionPosition={props.additionPosition}
    allowAdditions={props.allowAdditions}
    as={props.as}
    basic={props.basic}
    button={props.button}
    className={`dropdown ${props.className}`}
    closeOnBlur={props.closeOnBlur}
    closeOnChange={props.closeOnChange}
    compact={props.compact}
    deburr={props.deburr}
    defaultOpen={props.defaultOpen}
    defaultSearchQuery={props.defaultSearchQuery}
    defaultSelectedLabel={props.defaultSelectedLabel}
    defaultValue={props.defaultValue}
    disabled={props.disabled}
    error={props.error}
    floating={props.floating}
    fluid={props.fluid}
    header={props.header}
    icon={props.icon}
    inline={props.inline}
    item={props.item}
    labeled={props.labeled}
    loading={props.loading}
    minCharacters={props.minCharacters}
    multiple={props.multiple}
    noResultsMessage={props.noResultsMessage}
    onAddItem={props.onAddItem}
    onBlur={props.onBlur}
    onChange={props.onChange}
    onClick={props.onClick}
    onClose={props.onClose}
    onFocus={props.onFocus}
    onLabelClick={props.onLabelClick}
    onMouseDown={props.onMouseDown}
    onOpen={props.onOpen}
    onSearchChange={props.onSearchChange}
    open={props.open}
    openOnFocus={props.openOnFocus}
    options={props.options}
    placeholder={props.placeholder}
    pointing={props.pointing}
    renderLabel={props.renderLabel}
    scrolling={props.scrolling}
    search={props.search}
    searchInput={props.searchInput}
    searchQuery={props.searchQuery}
    selectOnBlur={props.selectOnBlur}
    selectOnNavigation={props.selectOnNavigation}
    selectedLabel={props.selectedLabel}
    selection={props.selection}
    simple={props.simple}
    style={props.style}
    tabIndex={props.tabIndex}
    text={props.text}
    trigger={props.trigger}
    upward={props.upward}
    value={props.value}
  >
    {props.children}
  </SUIDropdown>
);

Dropdown.propTypes = {
  additionLabel: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  additionPosition: PropTypes.oneOf(['top', 'bottom']),
  allowAdditions: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  basic: PropTypes.bool,
  button: PropTypes.bool,
  children: PropTypes.element,
  className: PropTypes.string,
  closeOnBlur: PropTypes.bool,
  closeOnChange: PropTypes.bool,
  compact: PropTypes.bool,
  deburr: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  defaultSearchQuery: PropTypes.string,
  defaultSelectedLabel: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  floating: PropTypes.bool,
  fluid: PropTypes.bool,
  header: PropTypes.node,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  inline: PropTypes.bool,
  item: PropTypes.bool,
  labeled: PropTypes.bool,
  loading: PropTypes.bool,
  minCharacters: PropTypes.number,
  multiple: PropTypes.bool,
  noResultsMessage: PropTypes.string,
  onAddItem: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  onFocus: PropTypes.func,
  onLabelClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onOpen: PropTypes.func,
  onSearchChange: PropTypes.func,
  open: PropTypes.bool,
  openOnFocus: PropTypes.bool,
  options: PropTypes.node,
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
  renderLabel: PropTypes.func,
  scrolling: PropTypes.bool,
  search: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  searchInput: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.node,
    PropTypes.object
  ]),
  searchQuery: PropTypes.string,
  selectOnBlur: PropTypes.bool,
  selectOnNavigation: PropTypes.bool,
  selectedLabel: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  selection: PropTypes.bool,
  simple: PropTypes.bool,
  style: stylePropType,
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  text: PropTypes.string,
  trigger: PropTypes.node,
  upward: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
  ])
};

export default Dropdown;
