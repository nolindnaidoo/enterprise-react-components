import React from 'react';
import PropTypes from 'prop-types';
import { TextArea as SUITextArea } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const TextArea = props => (
  <SUITextArea
    as={props.as}
    autoHeight={props.autoHeight}
    className={`textArea ${props.className}`}
    onChange={props.onChange}
    onInput={props.onInput}
    placeholder={props.placeholder}
    rows={props.rows}
    style={props.style}
    value={props.value}
  />
);

TextArea.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  autoHeight: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: stylePropType,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default TextArea;
