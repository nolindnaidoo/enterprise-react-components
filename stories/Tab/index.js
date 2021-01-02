import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Tab, TabPane } from '../../src/Components/Tab';

const stories = storiesOf('Tab', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A Tab is a hidden section of content activated by a Menu.')(() => {
    const borderlessLabel = 'Borderless';
    const withBorderless = false;
    const borderlessChange = boolean(borderlessLabel, withBorderless);

    const panes = [
      {
        menuItem: 'Tab 1',
        render: () => <TabPane>Tab 1 Content</TabPane>
      },
      {
        menuItem: 'Tab 2',
        render: () => <TabPane>Tab 2 Content</TabPane>
      },
      {
        menuItem: 'Tab 3',
        render: () => <TabPane>Tab 3 Content</TabPane>
      }
    ];

    const pointingLabel = 'Pointing';
    const withPointing = false;
    const pointingChange = boolean(pointingLabel, withPointing);

    const secondaryLabel = 'Secondary';
    const withSecondary = false;
    const secondaryChange = boolean(secondaryLabel, withSecondary);

    const tabularLabel = 'Tabular';
    const withTabular = false;
    const tabularChange = boolean(tabularLabel, withTabular);

    const textLabel = 'Text';
    const withText = false;
    const textChange = boolean(textLabel, withText);

    const verticalLabel = 'Vertical';
    const withVertical = false;
    const verticalChange = boolean(verticalLabel, withVertical);
    return (
      <Tab
        menu={{
          borderless: borderlessChange,
          pointing: pointingChange,
          secondary: secondaryChange,
          tabular: tabularChange,
          text: textChange,
          vertical: verticalChange
        }}
        onTabChange={action('changed')}
        panes={panes}
      />
    );
  })
);
