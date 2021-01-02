import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Pagination } from '../../src/Components/Pagination';

const stories = storiesOf('Pagination', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A component to render a pagination.')(() => {
    const activePageChange = number('Active Page', 9);
    const boundaryRangeChange = number('Boundary Range', 2);

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

    const floatedOptions = {
      none: '',
      right: 'Right'
    };
    const defaultFloated = '';
    const floatedChange = select('Floated', floatedOptions, defaultFloated);

    const inverted = boolean('Inverted', false);
    const pointing = boolean('Pointing', false);
    const siblingRangeChange = number('Sibling Range', 1);
    const totalPagesChange = number('Total Pages', 20);
    const secondary = boolean('Secondary', false);

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
    const sizeChange = select('Size', sizeOptions, defaultSize);

    const stackable = boolean('Stackable', false);
    const text = boolean('Text', false);
    const vertical = boolean('Vertical', false);
    return (
      <Pagination
        activePage={activePageChange}
        ariaLabel="test"
        boundaryRange={boundaryRangeChange}
        color={colorChange}
        floated={floatedChange}
        inverted={inverted}
        pointing={pointing}
        secondary={secondary}
        siblingRange={siblingRangeChange}
        size={sizeChange}
        stackable={stackable}
        text={text}
        totalPages={totalPagesChange}
        vertical={vertical}
      />
    );
  })
);
