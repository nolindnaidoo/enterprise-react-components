import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Button } from '../../src/Components/Button';
import { Popup } from '../../src/Components/Popup';

const stories = storiesOf('Popup', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A Popup displays additional information on top of a page.')(() => {
    const basicChange = boolean('Basic', false);
    const hideOnScrollChange = boolean('HideOnScroll', false);
    const horizontalOffset = number('Horizontal Offset', 0);
    const hoverableChange = boolean('Hoverable', false);
    const invertedChange = boolean('Inverted', false);

    const positionOptions = {
      'top left': 'Top Left',
      'top right': 'Top Right',
      'bottom right': 'Bottom Right',
      'bottom left': 'Bottom Left',
      'right center': 'Right Center',
      'left center': 'Left Center',
      'top center': 'Top Center',
      'bottom center': 'Bottom Center'
    };
    const defaultPosition = 'top center';
    const positionChange = select('Position', positionOptions, defaultPosition);

    const sizeOptions = {
      mini: 'Mini',
      tiny: 'Tiny',
      small: 'Small',
      large: 'Large',
      huge: 'Huge'
    };
    const sizeChange = select('Size', sizeOptions, 'large');
    const verticalOffset = number('Vertical Offset', 0);
    return (
      <Popup
        basic={basicChange}
        hideOnScroll={hideOnScrollChange}
        horizontalOffset={horizontalOffset}
        hoverable={hoverableChange}
        inverted={invertedChange}
        position={positionChange}
        size={sizeChange}
        trigger={<Button icon="add" />}
        verticalOffset={verticalOffset}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper
        malesuada proin libero.
      </Popup>
    );
  })
);
