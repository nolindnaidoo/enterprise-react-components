import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Dimmer, DimmerDimmable, Image } from '../../src/Components';
import imageFile from '../../public/assets/images/paragraph.png';
import imageFileTwo from '../../public/assets/images/300.png';

const stories = storiesOf('Dimmer', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A dimmer hides distractions to focus attention on particular content.'
  )(() => {
    const blurring = boolean('Blurring', false);
    const dimmed = boolean('Dimmed', true);
    const disabled = boolean('Disabled', false);

    const image = {
      src: imageFile
    };
    const imageTwo = {
      src: imageFileTwo
    };

    const inverted = boolean('Inverted', false);
    return (
      <DimmerDimmable blurring={blurring} dimmed={dimmed}>
        <Dimmer
          disabled={disabled}
          inverted={inverted}
          onClick={action('clicked')}
          simple
        />
        <p>
          <Image src={image.src} />
        </p>
        <p>
          <Image src={imageTwo.src} />
        </p>
      </DimmerDimmable>
    );
  })
);
