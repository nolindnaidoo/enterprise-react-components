import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import AccordionStory from './AccordionStory';

const stories = storiesOf('Accordion', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'An accordion allows users to toggle the display of sections of content.'
  )(() => {
    const inverted = boolean('Inverted', false);
    const style = {};
    return (
      <AccordionStory inverted={inverted} style={object('Style', style)} />
    );
  })
);
