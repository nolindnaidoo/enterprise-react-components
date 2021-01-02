import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import ProgressStory from './ProgressStory';

const stories = storiesOf('Progress', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A progress bar shows the progression of a task.')(() => {
    const active = boolean('Active', false);

    const colorLabel = 'Color';
    const colorOptions = {
      none: '',
      red: 'Red',
      orange: 'Orange',
      yellow: 'Yellow',
      olive: 'Olive',
      green: 'Green',
      teal: 'Teal',
      blue: 'Blue',
      violet: 'Violet',
      purple: 'Purple',
      pinnk: 'Pink',
      brown: 'Brown',
      grey: 'Grey',
      black: 'Black'
    };
    const defaultColor = '';
    const colorChange = select(colorLabel, colorOptions, defaultColor);

    const disabled = boolean('Disabled', false);
    const error = boolean('Error', false);
    const indicating = boolean('Indicating', true);
    const inverted = boolean('Inverted', false);

    const progressOptions = {
      percent: 'Percent',
      ratio: 'Ratio',
      value: 'Value'
    };
    const defaultProgress = 'percent';
    const progressChange = select('Progress', progressOptions, defaultProgress);

    const sizeLabel = 'Size';
    const sizeOptions = {
      none: '',
      tiny: 'Tiny',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      big: 'Big'
    };
    const defaultSize = '';
    const sizeChange = select(sizeLabel, sizeOptions, defaultSize);

    const success = boolean('Success', false);
    const warning = boolean('Warning', false);
    return (
      <ProgressStory
        active={active}
        color={colorChange}
        disabled={disabled}
        error={error}
        indicating={indicating}
        inverted={inverted}
        progress={progressChange}
        size={sizeChange}
        success={success}
        warning={warning}
      />
    );
  })
);
