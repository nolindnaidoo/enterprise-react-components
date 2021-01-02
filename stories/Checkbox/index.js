import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Checkbox } from '../../src/Components';

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A checkbox allows a user to select a value from a small set of options.'
  )(() => {
    const disabledLabel = 'Disabled';
    const withDisabled = false;
    const disabledChange = boolean(disabledLabel, withDisabled);

    const indeterminateLabel = 'Indeterminate';
    const withIndeterminate = false;
    const indeterminateChange = boolean(indeterminateLabel, withIndeterminate);

    const label = text('Label', 'Example');

    const radioLabel = 'Radio';
    const withRadio = false;
    const radioChange = boolean(radioLabel, withRadio);

    const readOnlyLabel = 'Read Only';
    const withReadOnly = false;
    const readOnlyChange = boolean(readOnlyLabel, withReadOnly);

    const sliderLabel = 'Slider';
    const withSlider = false;
    const sliderChange = boolean(sliderLabel, withSlider);

    const toggleLabel = 'Toggle';
    const withToggle = false;
    const toggleChange = boolean(toggleLabel, withToggle);

    return (
      <Checkbox
        disabled={disabledChange}
        indeterminate={indeterminateChange}
        label={label}
        onClick={action('clicked')}
        radio={radioChange}
        readOnly={readOnlyChange}
        slider={sliderChange}
        toggle={toggleChange}
      />
    );
  })
);
