import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Form, FormField, FormInput } from '../../src/Components/Form';
import { Button } from '../../src/Components/Button';
import { Label } from '../../src/Components';
import { Message } from '../../src/Components/Message';

const stories = storiesOf('Form', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A Form displays a set of related user input fields in a structured way.'
  )(() => {
    const errorChange = boolean('Error', false);
    const invertedChange = boolean('Inverted', false);

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

    const successChange = boolean('Success', false);
    const warningChange = boolean('Warning', false);

    return (
      <Form
        error={errorChange}
        inverted={invertedChange}
        size={sizeChange}
        success={successChange}
        warning={warningChange}
      >
        <FormField>
          <Label basic style={{ borderStyle: 'none' }}>
            First Name
          </Label>
          <input placeholder="First Name" />
        </FormField>
        <FormField>
          <Label basic style={{ borderStyle: 'none' }}>
            Last Name
          </Label>
          <input placeholder="Last Name" />
        </FormField>
        <Message
          success
          header="Form Completed"
          content="You're all signed up for the newsletter"
        />
        <Message error header="Error" content="This is an error message!" />
        <Message
          warning
          header="Could you check something!"
          list={[
            'That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail.'
          ]}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  })
);

stories.add(
  'Loading',
  withInfo(
    'If a form is in loading state, it will automatically show a loading indicator.'
  )(() => {
    const loadingChange = boolean('Loading', false);

    return (
      <Form loading={loadingChange}>
        <FormInput label="Email" placeholder="joe@schmoe.com" />
        <Button>Submit</Button>
      </Form>
    );
  })
);
