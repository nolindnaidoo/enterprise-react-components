import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import PortalStory from './PortalStory';

const stories = storiesOf('Portal', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A component that allows you to render children outside their parent.'
  )(() => {
    const closeOnDocumentClick = boolean('Close on Document Click', false);
    const closeOnEscape = boolean('Close on Escape', false);
    const closeOnPortalMouseLeave = boolean(
      'Close on Portal Mouse Leave',
      false
    );
    const closeOnTriggerBlur = boolean('Close on Trigger Blur', false);
    const closeOnTriggerClick = boolean('Close on Trigger Click', false);
    const closeOnTriggerMouseLeave = boolean(
      'Close on Trigger Mouse Leave',
      false
    );
    const openOnTriggerClick = boolean('Open on Trigger Click', false);
    const openOnTriggerFocus = boolean('Open on Trigger Focus', false);
    const openOnTriggerMouseEnter = boolean(
      'Open on Trigger Mouse Enter',
      false
    );
    const prepend = boolean('Prepend', false);
    return (
      <PortalStory
        closeOnDocumentClick={closeOnDocumentClick}
        closeOnEscape={closeOnEscape}
        closeOnPortalMouseLeave={closeOnPortalMouseLeave}
        closeOnTriggerBlur={closeOnTriggerBlur}
        closeOnTriggerClick={closeOnTriggerClick}
        closeOnTriggerMouseLeave={closeOnTriggerMouseLeave}
        openOnTriggerClick={openOnTriggerClick}
        openOnTriggerFocus={openOnTriggerFocus}
        openOnTriggerMouseEnter={openOnTriggerMouseEnter}
        prepend={prepend}
      />
    );
  })
);
