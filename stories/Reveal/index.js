import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Image } from '../../src/Components/Image';
import { Reveal, RevealContent } from '../../src/Components';
import imageFile from '../../public/assets/images/300.png';
import imageFileTwo from '../../public/assets/images/paragraph.png';

const stories = storiesOf('Reveal', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A reveal displays additional content' +
      'in place of previous content when activated.'
  )(() => {
    const active = boolean('Active', false);

    const animatedLabel = 'Animated';
    const animatedOptions = {
      fade: 'Fade',
      'small fade': 'Small Fade',
      move: 'Move',
      'move right': 'Move Right',
      'move up': 'Move Up',
      'move down': 'Move Down',
      rotate: 'Rotate',
      'rotate left': 'Rotate Left'
    };
    const defaultAnimated = 'fade';
    const animatedChange = select(
      animatedLabel,
      animatedOptions,
      defaultAnimated
    );

    const disabled = boolean('Disabled', false);

    const image = {
      src: imageFile
    };
    const imageTwo = {
      src: imageFileTwo
    };

    const imageSizeLabel = 'Image Size';
    const imageSizeOptions = {
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
    const defaultImageSize = 'small';
    const imageSizeChange = select(
      imageSizeLabel,
      imageSizeOptions,
      defaultImageSize
    );

    const instant = boolean('Instant', false);

    const style = {
      paddingBottom: 100
    };
    return (
      <Reveal
        active={active}
        animated={animatedChange}
        disabled={disabled}
        instant={instant}
        style={object('Style', style)}
      >
        <RevealContent visible>
          <Image src={image.src} size={imageSizeChange} />
        </RevealContent>
        <RevealContent hidden>
          <Image src={imageTwo.src} size={imageSizeChange} />
        </RevealContent>
      </Reveal>
    );
  })
);
