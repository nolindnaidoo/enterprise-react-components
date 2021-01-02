import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Dimmer, Image, Loader, Segment } from '../../src/Components';
import imageFile from '../../public/assets/images/paragraph.png';

const stories = storiesOf('Loader', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A loader alerts a user to wait for an activity to complete.')(
    () => {
      const active = boolean('Active', true);
      const disabled = boolean('Disabled', false);

      const image = {
        src: imageFile
      };

      const indeterminate = boolean('Indeterminate', false);

      const inlineLabel = 'Inline';
      const inlineOptions = {
        none: '',
        centered: 'centered'
      };
      const defaultInline = '';
      const inlineChange = select(inlineLabel, inlineOptions, defaultInline);

      const inverted = boolean('Inverted', false);

      const sizeLabel = 'Size';
      const sizeOptions = {
        none: '',
        mini: 'Mini',
        tiny: 'Tiny',
        small: 'Small',
        medium: 'Medium',
        large: 'Large',
        big: 'Big',
        huge: 'Huge',
        massive: 'Massive'
      };
      const defaultSize = '';
      const sizeChange = select(sizeLabel, sizeOptions, defaultSize);
      return (
        <Segment>
          <Dimmer active={active} inverted={inverted}>
            <Loader
              disabled={disabled}
              indeterminate={indeterminate}
              inline={inlineChange}
              size={sizeChange}
            >
              Loading
            </Loader>
          </Dimmer>
          <Image src={image.src} />
        </Segment>
      );
    }
  )
);
