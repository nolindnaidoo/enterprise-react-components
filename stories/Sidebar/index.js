import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import SidebarStory from './SidebarStory';

const stories = storiesOf('Sidebar', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A sidebar hides additional content beside a page.')(() => {
    const animationOptions = {
      overlay: 'Overlay',
      push: 'Push',
      'scale down': 'Scale Down',
      uncover: 'Uncover',
      'slide out': 'Slide Out',
      'slide along': 'Slide Along'
    };
    const animationChange = select('Animation', animationOptions, 'push');

    const directionOptions = {
      top: 'Top',
      right: 'Right',
      bottom: 'Bottom',
      left: 'Left'
    };
    const directionChange = select('Direction', directionOptions, 'left');

    const inverted = boolean('Inverted', false);

    const widthOptions = {
      none: '',
      'very thin': 'Very Thin',
      thin: 'Thin',
      wide: 'Wide',
      'very wide': 'Very Wide'
    };
    const defaultWidth = 'thin';
    const widthChange = select('Width', widthOptions, defaultWidth);
    return (
      <SidebarStory
        animation={animationChange}
        direction={directionChange}
        inverted={inverted}
        width={widthChange}
      />
    );
  })
);
