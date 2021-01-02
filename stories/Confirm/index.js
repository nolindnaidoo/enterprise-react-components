import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import ConfirmStory from './ConfirmStory';

const stories = storiesOf('Confirm', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A Confirm modal gives the user a choice to confirm or cancel an action.'
  )(() => {
    const sizeOptions = {
      none: '',
      fullscreen: 'Fullscreen',
      large: 'Large',
      mini: 'Mini',
      small: 'Small',
      tiny: 'Tiny'
    };
    const sizeChange = select('Size', sizeOptions, 'small');
    return <ConfirmStory size={sizeChange} />;
  })
);
