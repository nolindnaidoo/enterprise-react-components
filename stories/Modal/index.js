import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Button, Modal } from '../../src/Components';
import ModalStandard from './ModalStandard';
import ModalScrolling from './ModalScrolling';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A modal displays content that temporarily blocks interactions with the main view of a site.'
  )(() => {
    const basic = boolean('Basic', false);

    const dimmerLabel = 'Dimmer';
    const dimmerOptions = {
      none: '',
      blurring: 'Blurring',
      inverted: 'Inverted'
    };
    const defaultDimmer = 'blurring';
    const dimmerChange = select(dimmerLabel, dimmerOptions, defaultDimmer);

    return <ModalStandard basic={basic} dimmer={dimmerChange} />;
  })
);

stories.add(
  'Scrolling',
  withInfo(
    'When your modal content exceeds the height of the browser the scrollable area will automatically expand to include just enough space for scrolling, without scrolling the page below.'
  )(() => <ModalScrolling />)
);

stories.add(
  'Shorthand',
  withInfo('A modal can be created with shorthand props.')(() => (
    <Modal
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
      content="Call for reports."
      header="Reminder!"
      trigger={<Button>Shorthand Modal</Button>}
    />
  ))
);
