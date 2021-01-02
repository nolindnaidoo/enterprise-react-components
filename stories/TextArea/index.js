import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Form } from '../../src/Components/Form';
import { TextArea } from '../../src/Components';

const stories = storiesOf('TextArea', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A TextArea can be used to allow for extended user input.')(() => {
    const autoHeight = boolean('Auto Height', false);
    return (
      <Form>
        <TextArea
          autoHeight={autoHeight}
          onChange={action('changed')}
          placeholder="Placeholder e.g."
          rows={3}
        />
      </Form>
    );
  })
);
