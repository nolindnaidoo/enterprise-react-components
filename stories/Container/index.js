import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Container } from '../../src/Components';

const stories = storiesOf('Container', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A container limits content to a maximum width.')(() => {
    const fluidLabel = 'Fluid';
    const withFluid = false;
    const fluidChange = boolean(fluidLabel, withFluid);

    const textLabel = 'Text';
    const withText = false;
    const textChange = boolean(textLabel, withText);

    const textAlignLabel = 'Text Align';
    const alignments = {
      none: '',
      left: 'Left',
      center: 'Center',
      right: 'Right',
      justified: 'Justified'
    };
    const defaultAlignment = '';
    const alignmentChange = select(
      textAlignLabel,
      alignments,
      defaultAlignment
    );
    return (
      <Container
        fluid={fluidChange}
        text={textChange}
        textAlign={alignmentChange}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
    );
  })
);
