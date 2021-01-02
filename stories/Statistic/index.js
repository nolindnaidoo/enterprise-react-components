import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Icon } from '../../src/Components/Icon';
import { Segment } from '../../src/Components/Segment';
import {
  Statistic,
  StatisticGroup,
  StatisticLabel,
  StatisticValue
} from '../../src/Components/Statistic';

const stories = storiesOf('Statistic', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A statistic emphasizes the current value of an attribute.')(() => {
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
    const colorChange = select('Color', colorOptions, defaultColor);

    const horizontal = boolean('Horizontal', false);

    const sizeOptions = {
      none: '',
      mini: 'Mini',
      tiny: 'Tiny',
      small: 'Small',
      large: 'Large',
      huge: 'Huge'
    };
    const defaultSize = '';
    const sizeChange = select('Size', sizeOptions, defaultSize);

    const text = boolean('Text', false);
    return (
      <Statistic color={colorChange} horizontal={horizontal} size={sizeChange}>
        <StatisticValue text={text}>5,000</StatisticValue>
        <StatisticLabel>Downloads</StatisticLabel>
      </Statistic>
    );
  })
);

stories.add(
  'Group',
  withInfo('A group of statistics.')(() => {
    const horizontal = boolean('Horizontal', false);

    const sizeOptions = {
      none: '',
      mini: 'Mini',
      tiny: 'Tiny',
      small: 'Small',
      large: 'Large',
      huge: 'Huge'
    };
    const defaultSize = '';
    const sizeChange = select('Size', sizeOptions, defaultSize);

    const widthOptions = {
      none: '',
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16
    };
    const defaultWidth = '';
    const widthChange = select('Widths', widthOptions, defaultWidth);
    return (
      <StatisticGroup
        horizontal={horizontal}
        size={sizeChange}
        widths={widthChange}
      >
        <Statistic>
          <StatisticValue>10,000</StatisticValue>
          <StatisticLabel>Likes</StatisticLabel>
        </Statistic>
        <Statistic>
          <StatisticValue>50,000</StatisticValue>
          <StatisticLabel>Downloads</StatisticLabel>
        </Statistic>
        <Statistic>
          <StatisticValue>55,000</StatisticValue>
          <StatisticLabel>Members</StatisticLabel>
        </Statistic>
      </StatisticGroup>
    );
  })
);

stories.add(
  'Inverted',
  withInfo(
    'A group of statistics can be formatted to fit on a dark background.'
  )(() => {
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
    const colorChange = select('Color', colorOptions, defaultColor);
    return (
      <Segment inverted>
        <StatisticGroup color={colorChange} inverted>
          <Statistic>
            <StatisticValue>15,000</StatisticValue>
            <StatisticLabel>Likes</StatisticLabel>
          </Statistic>
          <Statistic>
            <StatisticValue>60,000</StatisticValue>
            <StatisticLabel>Downloads</StatisticLabel>
          </Statistic>
          <Statistic>
            <StatisticValue>
              <Icon name="users" />
              65,000
            </StatisticValue>
            <StatisticLabel>Members</StatisticLabel>
          </Statistic>
        </StatisticGroup>
      </Segment>
    );
  })
);
