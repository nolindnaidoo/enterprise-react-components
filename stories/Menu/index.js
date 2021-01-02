import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Menu, MenuHeader, MenuItem, MenuNested } from '../../src/Components';
import MenuStory from './MenuStory';

const stories = storiesOf('Menu', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A menu displays grouped navigation actions.')(() => {
    const borderlessLabel = 'Borderless';
    const withBorderless = false;
    const borderlessChange = boolean(borderlessLabel, withBorderless);

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
    const header = boolean('Header', false);

    const invertedColorLabel = 'Inverted Color';
    const withInvertedColor = false;
    const invertedColorChange = boolean(invertedColorLabel, withInvertedColor);

    const pointingChange = boolean('Pointing', false);

    const secondaryLabel = 'Secondary';
    const withSecondary = false;
    const secondaryChange = boolean(secondaryLabel, withSecondary);

    const sizeLabel = 'Size';
    const sizeOptions = {
      none: '',
      mini: 'Mini',
      tiny: 'Tiny',
      small: 'Small',
      large: 'Large',
      huge: 'Huge',
      massive: 'Massive'
    };
    const defaultSize = '';
    const sizeChange = select(sizeLabel, sizeOptions, defaultSize);

    const stackableLabel = 'Stackable';
    const withStackable = true;
    const stackableChange = boolean(stackableLabel, withStackable);

    const tabularLabel = 'Tabular';
    const withTabular = false;
    const tabularChange = boolean(tabularLabel, withTabular);

    const textLabel = 'Text';
    const withText = false;
    const textChange = boolean(textLabel, withText);

    const verticalLabel = 'Vertical';
    const withVertical = false;
    const verticalChange = boolean(verticalLabel, withVertical);

    return (
      <MenuStory
        borderless={borderlessChange}
        color={colorChange}
        disabled={disabledChange}
        header={header}
        inverted={invertedColorChange}
        pointing={pointingChange}
        secondary={secondaryChange}
        size={sizeChange}
        stackable={stackableChange}
        tabular={tabularChange}
        text={textChange}
        vertical={verticalChange}
      />
    );
  })
);

stories.add(
  'Sub Menu',
  withInfo('A menu can contain a sub menu.')(() => {
    const invertedColorLabel = 'Inverted Color';
    const withInvertedColor = false;
    const invertedColorChange = boolean(invertedColorLabel, withInvertedColor);

    const verticalLabel = 'Vertical';
    const withVertical = true;
    const verticalChange = boolean(verticalLabel, withVertical);
    return (
      <Menu inverted={invertedColorChange} vertical={verticalChange}>
        <MenuItem>
          <MenuHeader>Example</MenuHeader>
          <MenuNested>
            <MenuItem
              name={text('Menu Item Label 1', 'Menu Item 1')}
              onClick={action('clicked')}
            />
            <MenuItem
              name={text('Menu Item Label 2', 'Menu Item 2')}
              onClick={action('clicked')}
            />
          </MenuNested>
        </MenuItem>
        <MenuItem>
          <MenuHeader>Example 2</MenuHeader>
          <MenuNested>
            <MenuItem
              name={text('Menu Item Label 3', 'Menu Item 3')}
              onClick={action('clicked')}
            />
            <MenuItem
              name={text('Menu Item Label 4', 'Menu Item 4')}
              onClick={action('clicked')}
            />
          </MenuNested>
        </MenuItem>
      </Menu>
    );
  })
);
