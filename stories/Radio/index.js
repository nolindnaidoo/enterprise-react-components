import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Form, FormField } from '../../src/Components/Form';
import { Radio } from '../../src/Components';

const stories = storiesOf('Radio', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A Radio is sugar for <Checkbox radio />. Useful for exclusive groups of sliders or toggles.'
  )(() => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Example');
    const toggle = boolean('Toggle', false);
    const slider = boolean('Slider', false);
    return (
      <Radio
        disabled={disabled}
        label={label}
        slider={slider}
        onChange={action('changed')}
        toggle={toggle}
      />
    );
  })
);

stories.add(
  'Group',
  withInfo('Radios can be part of a group.')(() => {
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Example');
    const toggle = boolean('Toggle', false);
    const slider = boolean('Slider', false);
    return (
      <Form>
        <FormField>
          <Radio
            disabled={disabled}
            label={label}
            slider={slider}
            onChange={action('changed')}
            toggle={toggle}
          />
        </FormField>
        <FormField>
          <Radio
            disabled={disabled}
            label={label}
            slider={slider}
            onChange={action('changed')}
            toggle={toggle}
          />
        </FormField>
      </Form>
    );
  })
);
