import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Dropdown, Input } from '../../src/Components';

const stories = storiesOf('Input', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('An Input is a field used to elicit a response from a user.')(() => {
    const disabledLabel = 'Disabled';
    const withDisabled = false;
    const disabledChange = boolean(disabledLabel, withDisabled);

    const errorLabel = 'Error';
    const withError = false;
    const errorChange = boolean(errorLabel, withError);

    const fluidLabel = 'Fluid';
    const withFluid = false;
    const fluidChange = boolean(fluidLabel, withFluid);

    const focusLabel = 'Focus';
    const withFocus = false;
    const focusChange = boolean(focusLabel, withFocus);

    const iconLabel = 'Icon';
    const iconOptions = {
      search: 'Search',
      add: 'Add'
    };
    const defaultIcon = '';
    const iconChange = select(iconLabel, iconOptions, defaultIcon);

    const invertedLabel = 'Inverted';
    const withInverted = false;
    const invertedChange = boolean(invertedLabel, withInverted);

    const loadingLabel = 'Loading';
    const withLoading = false;
    const loadingChange = boolean(loadingLabel, withLoading);

    const sizeLabel = 'Size';
    const sizeOptions = {
      none: '',
      mini: 'Mini',
      tiny: 'Tiny',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      big: 'Big',
      huge: 'Huge',
      massive: 'Massive'
    };
    const defaultSize = '';
    const sizeChange = select(sizeLabel, sizeOptions, defaultSize);

    const transparentLabel = 'Transparent';
    const withTransparent = false;
    const transparentChange = boolean(transparentLabel, withTransparent);
    return (
      <Input
        disabled={disabledChange}
        error={errorChange}
        fluid={fluidChange}
        focus={focusChange}
        icon={iconChange}
        inverted={invertedChange}
        loading={loadingChange}
        onChange={action('changed')}
        placeholder={text('Placeholder', 'Input')}
        size={sizeChange}
        transparent={transparentChange}
      />
    );
  })
);

stories.add(
  'Action',
  withInfo(
    'An input can be formatted to alert the user to an action they may perform.'
  )(() => {
    const actionLabel = 'Action';
    const defaultAction = 'Search';
    const actionChange = text(actionLabel, defaultAction);
    return <Input action={actionChange} onChange={action('changed')} />;
  })
);

stories.add(
  'Dropdown',
  withInfo('An Input can be formatted to include a dropdown.')(() => {
    const options = [
      { key: '.com', text: '.com', value: '.com' },
      { key: '.net', text: '.net', value: '.net' },
      { key: '.org', text: '.org', value: '.org' }
    ];
    return (
      <Input
        label={<Dropdown defaultValue=".com" options={options} />}
        labelPosition="right"
        placeholder="Find Domain"
      />
    );
  })
);

stories.add(
  'Label',
  withInfo('An input can be formatted with a label.')(() => {
    const label = text('Label', 'https://');
    return <Input label={label} />;
  })
);
