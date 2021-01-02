import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Icon, Label, LabelDetail, LabelGroup } from '../../src/Components';

const stories = storiesOf('Label', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A label displays content classification.')(() => {
    const activeChange = boolean('Active', false);
    const attachedOptions = {
      '': '',
      top: 'Top',
      bottom: 'Bottom',
      'top right': 'Top Right',
      'top left': 'Top Left',
      'bottom left': 'Bottom Left',
      'bottom right': 'Bottom Right'
    };
    const attachedSelected = '';
    const attachedChange = select(
      'Attached',
      attachedOptions,
      attachedSelected
    );
    const basicChange = boolean('Basic', false);
    const circularChange = boolean('Circular', false);
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
      pink: 'Pink',
      brown: 'Brown',
      grey: 'Grey',
      black: 'Black'
    };
    const colorSelected = 'blue';
    const colorChange = select('Color', colorOptions, colorSelected);

    const floatingChange = boolean('Floating', false);
    const horizontalChange = boolean('Horizontal', false);
    const pointingOptions = {
      '': '',
      above: 'Above',
      below: 'Below',
      left: 'Left',
      right: 'Right'
    };
    const pointingSelected = '';
    const pointingChange = select(
      'Pointing',
      pointingOptions,
      pointingSelected
    );
    const ribbonOptions = {
      '': '',
      right: 'Right'
    };
    const ribbonSelected = '';
    const ribbonChange = select('Ribbon', ribbonOptions, ribbonSelected);
    const sizeOptions = {
      '': '',
      mini: 'Mini',
      tiny: 'Tiny',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      big: 'Big',
      huge: 'Huge',
      massive: 'Massive'
    };
    const sizeSelected = 'large';
    const sizeChange = select('Size', sizeOptions, sizeSelected);
    const tagChange = boolean('Tag', false);

    return (
      <Label
        as="a"
        active={activeChange}
        attached={attachedChange}
        basic={basicChange}
        circular={circularChange}
        color={colorChange}
        floating={floatingChange}
        horizontal={horizontalChange}
        onClick={action('clicked')}
        pointing={pointingChange}
        ribbon={ribbonChange}
        size={sizeChange}
        tag={tagChange}
      >
        <Icon name="mail" /> 23
      </Label>
    );
  })
);

stories.add(
  'Detail',
  withInfo('A label displays content classification.')(() => (
    <Label as="a" onClick={action('clicked')}>
      Dogs
      <LabelDetail>224</LabelDetail>
    </Label>
  ))
);

stories.add(
  'Group',
  withInfo('A label can be grouped.')(() => {
    const circularChange = boolean('Circular', false);
    const colorOptions = {
      red: 'Red',
      orange: 'Orange',
      yellow: 'Yellow',
      olive: 'Olive',
      green: 'Green',
      teal: 'Teal',
      blue: 'Blue',
      violet: 'Violet',
      purple: 'Purple',
      pink: 'Pink',
      brown: 'Brown',
      grey: 'Grey',
      black: 'Black'
    };
    const colorSelected = 'blue';
    const colorChange = select('Color', colorOptions, colorSelected);
    const sizeOptions = {
      '': '',
      mini: 'Mini',
      tiny: 'Tiny',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      big: 'Big',
      huge: 'Huge',
      massive: 'Massive'
    };
    const sizeSelected = 'large';
    const sizeChange = select('Size', sizeOptions, sizeSelected);
    const tagChange = boolean('Tag', false);
    return (
      <LabelGroup
        as="a"
        circular={circularChange}
        color={colorChange}
        size={sizeChange}
        tag={tagChange}
      >
        <Label as="a" onClick={action('clicked')}>
          Fun
          <Icon name="close" />
        </Label>
        <Label as="a" onClick={action('clicked')}>
          Happy
          <LabelDetail>22</LabelDetail>
        </Label>
        <Label as="a" onClick={action('clicked')}>
          Smart
        </Label>
        <Label as="a" onClick={action('clicked')}>
          Insane
        </Label>
        <Label as="a" onClick={action('clicked')}>
          Exciting
        </Label>
      </LabelGroup>
    );
  })
);
