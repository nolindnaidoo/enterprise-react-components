import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Column, Grid, Row, Segment } from '../../src/Components';

const stories = storiesOf('Grid', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A grid is used to harmonize negative space in a layout.')(() => {
    const celled = boolean('Celled', false);

    const columnsLabel = 'Columns';
    const columnsOptions = {
      equal: 'Equal',
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
    const defaultColumns = 'equal';
    const columnsChange = select(columnsLabel, columnsOptions, defaultColumns);

    const containerLabel = 'Container';
    const withContainer = false;
    const containerChange = boolean(containerLabel, withContainer);
    const divided = boolean('Divided', false);

    const gridStyle = {
      backgroundColor: '',
      color: ''
    };

    const paddedLabel = 'Padded';
    const paddedOptions = {
      horizontally: 'Horizontally',
      vertically: 'Vertically'
    };
    const defaultPadded = '';
    const paddedChange = select(paddedLabel, paddedOptions, defaultPadded);

    const relaxed = boolean('Relaxed', false);

    const rowStyle = {
      backgroundColor: '',
      color: ''
    };

    const textAlignLabel = 'Text Align';
    const textAlignments = {
      left: 'Left',
      center: 'Center',
      right: 'Right',
      justified: 'justified'
    };
    const defaultAlignment = 'center';
    const changeAlignment = select(
      textAlignLabel,
      textAlignments,
      defaultAlignment
    );
    return (
      <Grid
        celled={celled}
        columns={columnsChange}
        container={containerChange}
        divided={divided}
        padded={paddedChange}
        relaxed={relaxed}
        style={object('Grid Style', gridStyle)}
      >
        <Row columns={columnsChange} style={object('Row Style', rowStyle)}>
          <Column textAlign={changeAlignment}>
            <Segment>1</Segment>
          </Column>
          <Column textAlign={changeAlignment}>
            <Segment>2</Segment>
          </Column>
          <Column textAlign={changeAlignment}>
            <Segment>3</Segment>
          </Column>
          <Column textAlign={changeAlignment}>
            <Segment>4</Segment>
          </Column>
        </Row>
        <Row columns={columnsChange}>
          <Column textAlign={changeAlignment}>
            <Segment>1</Segment>
          </Column>
          <Column textAlign={changeAlignment}>
            <Segment>2</Segment>
          </Column>
          <Column textAlign={changeAlignment}>
            <Segment>3</Segment>
          </Column>
        </Row>
        <Row columns={columnsChange}>
          <Column textAlign={changeAlignment}>
            <Segment>1</Segment>
          </Column>
          <Column textAlign={changeAlignment}>
            <Segment>2</Segment>
          </Column>
        </Row>
      </Grid>
    );
  })
);
