import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Icon } from '../../src/Components/Icon';
import {
  Step,
  StepContent,
  StepDescription,
  StepGroup,
  StepTitle
} from '../../src/Components/Step';

const stories = storiesOf('Step', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A step shows the completion status of an activity in a series of activities.'
  )(() => {
    const active = boolean('Active', true);
    const completed = boolean('Completed', false);
    const disabled = boolean('Disabled', false);
    const ordered = boolean('Ordered', false);

    const sizeOptions = {
      none: '',
      mini: 'Mini',
      tiny: 'Tiny',
      small: 'Small',
      large: 'Large',
      big: 'Big',
      huge: 'Huge',
      massive: 'Massive'
    };
    const defaultSize = '';
    const sizeChange = select('Size', sizeOptions, defaultSize);

    const unstackable = boolean('Unstackable', true);
    const vertical = boolean('Vertical', false);

    const widthOptions = {
      1: 1,
      2: 2,
      3: 3
    };
    const defaultWidth = 3;
    const widthChange = select('Widths', widthOptions, defaultWidth);
    return (
      <StepGroup
        ordered={ordered}
        size={sizeChange}
        unstackable={unstackable}
        vertical={vertical}
        widths={widthChange}
      >
        <Step
          completed={completed}
          disabled={disabled}
          onClick={action('clicked')}
        >
          <Icon name="truck" />
          <StepContent>
            <StepTitle>Shipping</StepTitle>
            <StepDescription>Choose your shipping options</StepDescription>
          </StepContent>
        </Step>

        <Step active={active} onClick={action('clicked')}>
          <Icon name="payment" />
          <StepContent>
            <StepTitle>Billing</StepTitle>
            <StepDescription>Enter billing information</StepDescription>
          </StepContent>
        </Step>

        <Step onClick={action('clicked')}>
          <Icon name="info" />
          <StepContent>
            <StepTitle>Confirm Order</StepTitle>
          </StepContent>
        </Step>
      </StepGroup>
    );
  })
);
