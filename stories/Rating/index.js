import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Rating } from '../../src/Components/Rating';

const stories = storiesOf('Rating', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A rating indicates user interest in content.')(() => {
    const clearableChange = boolean('Clearable', true);
    const disabledChange = boolean('Disabled', false);

    const iconLabel = 'Icon';
    const iconOptions = {
      star: 'Star',
      heart: 'Heart'
    };
    const iconSelected = 'star';
    const iconChange = select(iconLabel, iconOptions, iconSelected);

    const maxRatingLabel = 'Max Rating';
    const maxRatingOptions = {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5'
    };
    const maxRatingSelected = 5;
    const maxRatingChange = select(
      maxRatingLabel,
      maxRatingOptions,
      maxRatingSelected
    );

    const sizeLabel = 'Size';
    const sizeOptions = {
      mini: 'Mini',
      tiny: 'Tiny',
      small: 'Small',
      large: 'Large',
      huge: 'Huge',
      massive: 'Massive'
    };
    const defaultSize = 'large';
    const sizeChange = select(sizeLabel, sizeOptions, defaultSize);
    return (
      <Rating
        clearable={clearableChange}
        defaultRating={3}
        disabled={disabledChange}
        icon={iconChange}
        maxRating={maxRatingChange}
        onRate={action('rated')}
        size={sizeChange}
      />
    );
  })
);
