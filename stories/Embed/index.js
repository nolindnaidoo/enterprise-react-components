import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Embed } from '../../src/Components';
import placeholder from '../../public/assets/images/300.png';

const stories = storiesOf('Embed', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'An embed displays content from other websites like YouTube or Vimeo videos.'
  )(() => {
    const aspectRatioOptions = {
      none: '',
      '4:3': '4:3',
      '16:9': '16:9',
      '21:9': '21:9'
    };
    const defaultAspectRatio = '';
    const aspectRatioChange = select(
      'Aspect Ratio',
      aspectRatioOptions,
      defaultAspectRatio
    );

    const idOptions = {
      nWfyw51DQfU: 'YouTube',
      36627588: 'Vimeo'
    };
    const defaultId = 'nWfyw51DQfU';
    const idChange = select('Id', idOptions, defaultId);

    const sourceOptions = {
      youtube: 'YouTube',
      vimeo: 'Vimeo'
    };
    const defaultSource = 'youtube';
    const sourceChange = select('Source', sourceOptions, defaultSource);
    return (
      <Embed
        aspectRatio={aspectRatioChange}
        id={idChange}
        onClick={action('clicked')}
        placeholder={placeholder}
        source={sourceChange}
      />
    );
  })
);
