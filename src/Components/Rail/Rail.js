import React from 'react';
import PropTypes from 'prop-types';
import { Rail as SUIRail } from 'semantic-ui-react';
import stylePropType from 'react-style-proptype';
import 'semantic-ui-css/semantic.min.css';

const Rail = props => (
  <SUIRail
    as={props.as}
    attached={props.attached}
    className={`rail ${props.className}`}
    close={props.close}
    content={props.content}
    dividing={props.dividing}
    internal={props.internal}
    position={props.position}
    size={props.size}
    style={props.style}
  >
    {props.children}
  </SUIRail>
);

Rail.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  attached: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),
  content: PropTypes.node,
  dividing: PropTypes.bool,
  internal: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'large',
    'big',
    'huge',
    'massive'
  ]),
  style: stylePropType
};

export default Rail;
