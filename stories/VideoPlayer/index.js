import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { VideoPlayer } from '../../src/Components';

const stories = storiesOf('VideoPlayer', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('VideoPlayer is a web video player.')(() => {
    const fluid = boolean('Fluid', true);
    const muted = boolean('Muted', false);
    return (
      <VideoPlayer
        fluid={fluid}
        muted={muted}
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    );
  })
);
