import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Select } from '../../src/Components';

const stories = storiesOf('Select', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A Select is sugar for <Dropdown selection />.')(() => {
    const compact = boolean('Compact', false);
    const disabled = boolean('Disabled', false);
    const error = boolean('Error', false);
    const floating = boolean('Floating', false);
    const fluid = boolean('Fluid', false);
    const loading = boolean('Loading', false);
    const multiple = boolean('Multiple', false);
    const placeholderChange = text('Placeholder', 'Select one option');

    const pointingOptions = {
      none: '',
      left: 'Left',
      right: 'Right',
      top: 'Top',
      'top left': 'Top Left',
      'top right': 'Top Right',
      bottom: 'Bottom',
      'bottom left': 'Bottom Left',
      'bottom right': 'Bottom Right'
    };
    const defaultPointing = '';
    const pointingChange = select('Pointing', pointingOptions, defaultPointing);

    const search = boolean('Search', false);
    const upward = boolean('Upward', false);

    const selectOptions = [
      { key: 'option1', value: 'option1', text: 'Option1' },
      { key: 'option2', value: 'option2', text: 'Option2' },
      { key: 'option3', value: 'option3', text: 'Option3' }
    ];
    return (
      <Select
        compact={compact}
        disabled={disabled}
        error={error}
        floating={floating}
        fluid={fluid}
        loading={loading}
        multiple={multiple}
        options={selectOptions}
        placeholder={placeholderChange}
        pointing={pointingChange}
        search={search}
        upward={upward}
      />
    );
  })
);
