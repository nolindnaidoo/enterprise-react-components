import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import TransitionStory from './TransitionStory';

const stories = storiesOf('Transition', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A transition is an animation usually used to move content in or out of view.'
  )(() => {
    const animationOptions = {
      scale: 'Scale',
      fade: 'Fade',
      'fade up': 'Fade Up',
      'fade down': 'Fade Down',
      'fade left': 'Fade Left',
      'fade right': 'Fade Right',
      'horizontal flip': 'Horizontal Flip',
      'vertical flip': 'Vertical Flip',
      drop: 'Drop',
      'fly left': 'Fly Left',
      'fly right': 'Fly Right',
      'fly up': 'Fly Up',
      'fly down': 'Fly Down',
      'swing left': 'Swing Left',
      'swing right': 'Swing Right',
      'swing up': 'Swing Up',
      'swing down': 'Swing Down',
      browse: 'Browse',
      'browse right': 'Browse Right',
      'slide down': 'Slide Down',
      'slide up': 'Slide Up',
      'slide right': 'Slide Right',
      jiggle: 'Jiggle',
      flash: 'Flash',
      shake: 'Shake',
      pulse: 'Pulse',
      tada: 'Tada',
      bounce: 'Bounce'
    };
    const defaultAnimation = 'scale';
    const animationChange = select(
      'Animation',
      animationOptions,
      defaultAnimation
    );

    const duration = number('Duration', 500);
    return <TransitionStory animation={animationChange} duration={duration} />;
  })
);
