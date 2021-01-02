import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Header, HeaderContent, Icon, Subheader } from '../../src/Components';

const stories = storiesOf('Header', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A header provides a short summary of content.')(() => {
    const blockLabel = 'Block';
    const withBlock = false;
    const blockChange = boolean(blockLabel, withBlock);

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
      pink: 'Pink',
      brown: 'Brown',
      grey: 'Grey',
      black: 'Black'
    };
    const defaultColor = '';
    const colorChange = select(colorLabel, colorOptions, defaultColor);

    const disabledLabel = 'Disabled';
    const withDisabled = false;
    const disabledChange = boolean(disabledLabel, withDisabled);

    const dividingLabel = 'Dividing';
    const withDividing = false;
    const dividingChange = boolean(dividingLabel, withDividing);

    const invertedLabel = 'Inverted';
    const withInverted = false;
    const invertedChange = boolean(invertedLabel, withInverted);

    const sizeLabel = 'Size';
    const sizes = {
      none: '',
      tiny: 'Tiny',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      huge: 'Huge'
    };
    const defaultSize = '';
    const changeSize = select(sizeLabel, sizes, defaultSize);

    const subLabel = 'Sub';
    const withSub = false;
    const subChange = boolean(subLabel, withSub);

    const textAlignLabel = 'Text Align';
    const textAlignments = {
      left: 'Left',
      center: 'Center',
      right: 'Right',
      justified: 'Justified'
    };
    const defaultAlignment = 'left';
    const changeAlignment = select(
      textAlignLabel,
      textAlignments,
      defaultAlignment
    );
    return (
      <Header
        block={blockChange}
        color={colorChange}
        disabled={disabledChange}
        dividing={dividingChange}
        inverted={invertedChange}
        size={changeSize}
        sub={subChange}
        textAlign={changeAlignment}
      >
        Example Header
      </Header>
    );
  })
);

stories.add(
  'Subheader',
  withInfo(
    'Headers may be formatted to label smaller or de-emphasized content.'
  )(() => {
    const sizeLabel = 'Size';
    const sizes = {
      none: '',
      tiny: 'Tiny',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      huge: 'Huge'
    };
    const defaultSize = '';
    const changeSize = select(sizeLabel, sizes, defaultSize);

    const textAlignLabel = 'Text Align';
    const textAlignments = {
      left: 'Left',
      center: 'Center',
      right: 'Right',
      justified: 'Justified'
    };
    const defaultAlignment = 'left';
    const changeAlignment = select(
      textAlignLabel,
      textAlignments,
      defaultAlignment
    );
    return (
      <Header size={changeSize} textAlign={changeAlignment}>
        Example
        <Subheader>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Subheader>
      </Header>
    );
  })
);

stories.add(
  'Header Icon',
  withInfo('A header can be formatted to emphasize an icon..')(() => {
    const as = text('As', 'h3');
    const circular = boolean('Circular', true);
    const icon = boolean('Icon', false);
    return (
      <Header as={as} icon={icon}>
        <Icon circular={circular} name="add" />
        <HeaderContent>Add Item</HeaderContent>
      </Header>
    );
  })
);
