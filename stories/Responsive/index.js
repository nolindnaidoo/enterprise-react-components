import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Responsive } from '../../src/Components';
import { Segment, SegmentGroup } from '../../src/Components/Segment';

const stories = storiesOf('Responsive', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('Responsive can control visibility of content.')(() => (
    <SegmentGroup>
      <Responsive as={Segment} minWidth={568}>
        Visible only if display has 568px width and higher
      </Responsive>
      <Responsive as={Segment} minWidth={768}>
        Visible only if display has 768px width and higher
      </Responsive>
      <Responsive as={Segment} maxWidth={600}>
        Visible only if display has 600px width and lower
      </Responsive>
    </SegmentGroup>
  ))
);
