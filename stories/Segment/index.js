import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Segment, SegmentGroup } from '../../src/Components/Segment';

const stories = storiesOf('Segment', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A segment is used to create a grouping of related content.')(() => {
    const basicLabel = 'Basic';
    const withBasic = false;
    const basicChange = boolean(basicLabel, withBasic);

    const circularLabel = 'Circular';
    const withCircular = false;
    const circularChange = boolean(circularLabel, withCircular);

    const label = 'Color';
    const options = {
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
    const defaultValue = '';
    const value = select(label, options, defaultValue);

    const compactLabel = 'Compact';
    const withCompact = false;
    const compactChange = boolean(compactLabel, withCompact);

    const disabledLabel = 'Disabled';
    const withDisabled = false;
    const disabledChange = boolean(disabledLabel, withDisabled);

    const floatedOptions = {
      none: '',
      left: 'Left',
      right: 'Right'
    };
    const defaultFloated = '';
    const floatedChange = select('Floated', floatedOptions, defaultFloated);

    const invertedColorLabel = 'Inverted';
    const withInvertedColor = false;
    const invertedColorChange = boolean(invertedColorLabel, withInvertedColor);

    const loadingLabel = 'Loading';
    const withLoading = false;
    const loadingChange = boolean(loadingLabel, withLoading);

    const paddedLabel = 'Padded';
    const withPadded = false;
    const paddedChange = boolean(paddedLabel, withPadded);

    const sizeLabel = 'Size';
    const sizes = {
      none: '',
      tiny: 'Tiny',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      big: 'Big'
    };
    const defaultSize = '';
    const changeSize = select(sizeLabel, sizes, defaultSize);

    const tertiaryLabel = 'Tertiary';
    const withTertiary = false;
    const tertiaryChange = boolean(tertiaryLabel, withTertiary);

    const textAlignLabel = 'Text Align';
    const textAlignments = {
      left: 'Left',
      center: 'Center',
      right: 'Right'
    };
    const defaultAlignment = 'center';
    const changeAlignment = select(
      textAlignLabel,
      textAlignments,
      defaultAlignment
    );
    return (
      <Segment
        basic={basicChange}
        circular={circularChange}
        compact={compactChange}
        disabled={disabledChange}
        color={value}
        floated={floatedChange}
        inverted={invertedColorChange}
        loading={loadingChange}
        padded={paddedChange}
        size={changeSize}
        tertiary={tertiaryChange}
        textAlign={changeAlignment}
      >
        Test
      </Segment>
    );
  })
);

stories.add(
  'Segment Group',
  withInfo('A group of segments can be formatted to appear together.')(() => {
    const groupSizeLabel = 'Group Size';
    const groupSizes = {
      none: '',
      tiny: 'Tiny',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      big: 'Big'
    };
    const defaultGroupSize = '';
    const changeGroupSize = select(
      groupSizeLabel,
      groupSizes,
      defaultGroupSize
    );

    const horizontalLabel = 'Horizontal';
    const withHorizontal = false;
    const horizontalChange = boolean(horizontalLabel, withHorizontal);

    const piledLabel = 'Piled';
    const withPiled = false;
    const piledChange = boolean(piledLabel, withPiled);

    const raisedLabel = 'Raised';
    const withRaised = false;
    const raisedChange = boolean(raisedLabel, withRaised);

    const stackedLabel = 'Stacked';
    const withStacked = false;
    const stackedChange = boolean(stackedLabel, withStacked);

    const textAlignLabel = 'Text Align';
    const textAlignments = {
      left: 'Left',
      center: 'Center',
      right: 'Right'
    };
    const defaultAlignment = 'center';
    const changeAlignment = select(
      textAlignLabel,
      textAlignments,
      defaultAlignment
    );
    return (
      <SegmentGroup
        horizontal={horizontalChange}
        piled={piledChange}
        raised={raisedChange}
        size={changeGroupSize}
        stacked={stackedChange}
      >
        <Segment textAlign={changeAlignment}>Test</Segment>
        <Segment textAlign={changeAlignment}>Test</Segment>
      </SegmentGroup>
    );
  })
);
