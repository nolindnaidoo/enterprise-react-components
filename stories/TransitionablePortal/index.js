import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import TransitionablePortalStory from './TransitionablePortalStory';

const stories = storiesOf('TransitionablePortal', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A sugar for `Portal` and `Transition`.')(() => {
    const transition = {
      animation: 'scale',
      duration: 400
    };
    return (
      <TransitionablePortalStory
        transition={object('Transition', transition)}
      />
    );
  })
);
