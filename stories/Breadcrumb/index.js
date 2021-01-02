import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {
  Breadcrumb,
  BreadcrumbDivider,
  BreadcrumbSection
} from '../../src/Components';

const stories = storiesOf('Breadcrumb', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A breadcrumb is used to show hierarchy between content.')(() => {
    const active1Change = boolean('Section1 Active', true);
    const active2Change = boolean('Section2 Active', false);
    const active3Change = boolean('Section3 Active', false);

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
    return (
      <Breadcrumb size={sizeChange}>
        <BreadcrumbSection
          active={active1Change}
          link
          onClick={action('clicked')}
        >
          Home
        </BreadcrumbSection>
        <BreadcrumbDivider>/</BreadcrumbDivider>
        <BreadcrumbSection
          active={active2Change}
          link
          onClick={action('clicked')}
        >
          Registration
        </BreadcrumbSection>
        <BreadcrumbDivider icon="right arrow" />
        <BreadcrumbSection active={active3Change}>
          Personal Information
        </BreadcrumbSection>
      </Breadcrumb>
    );
  })
);
