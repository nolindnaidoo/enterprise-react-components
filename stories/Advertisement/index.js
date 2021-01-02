import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Advertisement } from '../../src/Components';

const stories = storiesOf('Advertisement', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('An ad displays third-party promotional content.')(() => {
    const centeredLabel = 'Centered';
    const centeredValue = false;
    const centeredChange = boolean(centeredLabel, centeredValue);

    const testLabel = 'Text';
    const testValue = 'Sample Text';
    const testChange = text(testLabel, testValue);

    const unitLabel = 'Unit';
    const unitOptions = {
      'medium rectangle': 'Medium Rectangle',
      'large rectangle': 'Large Rectangle',
      'vertical rectangle': 'Vertical Rectangle',
      'small rectangle': 'Small Rectangle',
      'mobile banner': 'Mobile Banner',
      banner: 'Banner',
      'vertical banner': 'Vertical Banner',
      'top banner': 'Top Banner',
      'half banner': 'Half Banner',
      button: 'Button',
      'square button': 'Square Button',
      'small button': 'Small Button',
      skyscraper: 'Skyscraper',
      'wide skyscraper': 'Wide Skyscraper',
      leaderboard: 'Leaderboard',
      'large leaderboard': 'Large Leaderboard',
      'mobile leaderboard': 'Mobile Leaderboard',
      billboard: 'Billboard',
      panorama: 'Panorama',
      netboard: 'Netboard',
      'half page': 'Half Page',
      square: 'Square',
      'small square': 'Small Square'
    };
    const unitSelected = 'banner';
    const unitChange = select(unitLabel, unitOptions, unitSelected);

    return (
      <Advertisement
        centered={centeredChange}
        test={testChange}
        unit={unitChange}
      />
    );
  })
);
