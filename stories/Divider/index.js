import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Button, Divider, Segment } from '../../src/Components';

const stories = storiesOf('Divider', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A divider visually segments content into groups.')(() => {
    const fitted = boolean('Fitted', false);
    const hidden = boolean('Hidden', false);
    const horizontal = boolean('Horizontal', true);
    const inverted = boolean('Inverted', false);
    const section = boolean('Section', true);

    return (
      <Segment padded>
        <Button primary fluid>
          Login
        </Button>
        <Divider
          fitted={fitted}
          hidden={hidden}
          horizontal={horizontal}
          inverted={inverted}
          section={section}
        >
          or
        </Divider>
        <Button secondary fluid>
          Sign Up Now
        </Button>
      </Segment>
    );
  })
);
