import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Image, ImageGroup } from '../../src/Components';
import imageFile from '../../public/assets/images/placeHolder.png';
import imageFileTwo from '../../public/assets/images/300.png';

const stories = storiesOf('Image', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('An image is a graphic representation of something.')(() => {
    const borderedLabel = 'Bordered';
    const withBordered = false;
    const borderedChange = boolean(borderedLabel, withBordered);

    const centeredLabel = 'Centered';
    const withCentered = false;
    const centeredChange = boolean(centeredLabel, withCentered);
    const circular = boolean('Circular', false);

    const disabledLabel = 'Disabled';
    const withDisabled = false;
    const disabledChange = boolean(disabledLabel, withDisabled);

    const fluidLabel = 'Fluid';
    const withFluid = false;
    const fluidChange = boolean(fluidLabel, withFluid);

    const hiddenLabel = 'Hidden';
    const withHidden = false;
    const hiddenChange = boolean(hiddenLabel, withHidden);

    const image = {
      src: imageFile
    };

    const rounded = boolean('Rounded', false);

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
    const defaultSize = 'medium';
    const sizeChange = select(sizeLabel, sizeOptions, defaultSize);
    return (
      <Image
        bordered={borderedChange}
        centered={centeredChange}
        circular={circular}
        disabled={disabledChange}
        fluid={fluidChange}
        hidden={hiddenChange}
        rounded={rounded}
        size={sizeChange}
        src={image.src}
      />
    );
  })
);

stories.add(
  'Avatar',
  withInfo(
    'An image may be formatted to appear inline with text as an avatar.'
  )(() => {
    const avatarLabel = 'Avatar';
    const withAvatar = true;
    const avatarChange = boolean(avatarLabel, withAvatar);

    const image = {
      src: imageFileTwo
    };

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
    const defaultSize = 'small';
    const sizeChange = select(sizeLabel, sizeOptions, defaultSize);

    const style = {};
    return (
      <div>
        <Image
          avatar={avatarChange}
          size={sizeChange}
          src={image.src}
          style={object('Style', style)}
        />
        <span>Example Text</span>
      </div>
    );
  })
);

stories.add(
  'Group',
  withInfo('A group of images.')(() => {
    const image = {
      src: imageFileTwo
    };

    const sizeLabel = 'Size';
    const sizeOptions = {
      none: '',
      mini: 'Mini',
      tiny: 'Tiny',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      huge: 'Huge'
    };
    const defaultSize = 'small';
    const sizeChange = select(sizeLabel, sizeOptions, defaultSize);
    return (
      <ImageGroup size={sizeChange}>
        <Image src={image.src} />
        <Image src={image.src} />
        <Image src={image.src} />
        <Image src={image.src} />
      </ImageGroup>
    );
  })
);
