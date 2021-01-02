import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import RheostatStory from './RheostatStory';

const stories = storiesOf('Rheostat', module);
stories.addDecorator(withKnobs);

stories.add(
  'Basic',
  withInfo('A mobile, tablet, desktop, and accessible slider for the web.')(
    () => {
      const disabled = boolean('Disabled', false);
      const snap = boolean('Snap', false);

      return (
        <RheostatStory
          disabled={disabled}
          pitPoints={[
            0,
            5,
            10,
            15,
            20,
            25,
            30,
            35,
            40,
            45,
            50,
            55,
            60,
            65,
            70,
            75,
            80,
            85,
            90,
            95,
            100
          ]}
          snap={snap}
          snapPoints={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          values={[20, 80]}
        />
      );
    }
  )
);
