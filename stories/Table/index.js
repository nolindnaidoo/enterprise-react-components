import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Label } from '../../src/Components/Label';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow
} from '../../src/Components/Table';

const stories = storiesOf('Table', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A table displays a collections of data grouped into rows.')(() => {
    const active = boolean('Active', false);
    const basic = boolean('Basic', false);
    const celled = boolean('Celled', true);

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

    const compact = boolean('Compact', false);
    const definition = boolean('Definition', false);
    const disabled = boolean('Disabled', false);
    const error = boolean('Error', false);
    const fixed = boolean('Fixed', true);
    const inverted = boolean('Inverted', false);
    const negative = boolean('Negative', false);
    const positive = boolean('Positive', false);
    const selectableCell = boolean('Selectable Cell', false);
    const selectableRow = boolean('Selectable Row', false);
    const singleLine = boolean('Single Line', true);

    const sizeOptions = {
      none: '',
      small: 'Small',
      large: 'Large'
    };
    const defaultSize = '';
    const sizeChange = select('Size', sizeOptions, defaultSize);

    const striped = boolean('Striped', false);
    const structured = boolean('Structured', true);

    const textAlignOptions = {
      none: '',
      left: 'Left',
      center: 'Center',
      right: 'Right'
    };
    const defaultAlignment = '';
    const alignmentChange = select(
      'Text Align',
      textAlignOptions,
      defaultAlignment
    );

    const unstackable = boolean('Unstackable', true);
    const warning = boolean('Warning', false);
    return (
      <Table
        basic={basic}
        celled={celled}
        color={colorChange}
        compact={compact}
        definition={definition}
        fixed={fixed}
        inverted={inverted}
        selectable={selectableRow}
        singleLine={singleLine}
        size={sizeChange}
        striped={striped}
        structured={structured}
        textAlign={alignmentChange}
        unstackable={unstackable}
      >
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Header</TableHeaderCell>
            <TableHeaderCell>Header</TableHeaderCell>
            <TableHeaderCell>Header</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow active={active}>
            <TableCell selectable={selectableCell}>
              <Label ribbon>First</Label>
            </TableCell>
            <TableCell selectable={selectableCell}>Cell</TableCell>
            <TableCell selectable={selectableCell}>Cell</TableCell>
          </TableRow>
          <TableRow disabled={disabled}>
            <TableCell selectable={selectableCell}>Cell</TableCell>
            <TableCell
              active={active}
              error={error}
              negative={negative}
              positive={positive}
              selectable={selectableCell}
              warning={warning}
            >
              Cell
            </TableCell>
            <TableCell selectable={selectableCell}>Cell</TableCell>
          </TableRow>
          <TableRow
            negative={negative}
            positive={positive}
            error={error}
            warning={warning}
          >
            <TableCell selectable={selectableCell}>Cell</TableCell>
            <TableCell disabled={disabled} selectable={selectableCell}>
              Cell
            </TableCell>
            <TableCell selectable={selectableCell}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              at tellus at urna condimentum mattis. Gravida in fermentum et
              sollicitudin ac. Convallis aenean et tortor at risus viverra
              adipiscing at. Risus in hendrerit gravida rutrum quisque non
              tellus.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  })
);
