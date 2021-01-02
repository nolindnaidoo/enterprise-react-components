import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Rail } from '../../src/Components';
import { Grid, Column } from '../../src/Components/Grid';
import { Segment } from '../../src/Components/Segment';
import { Image } from '../../src/Components/Image';
import paragraphImg from '../../public/assets/images/paragraph.png';

const stories = storiesOf('Rail', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A rail is used to show accompanying content outside the boundaries of the main view of a site.'
  )(() => {
    const attachedChange = boolean('Attached', false);
    const dividingChange = boolean('Dividing', false);
    const internalChange = boolean('Internal', false);
    const sizeLabel = 'Size';
    const sizeOptions = {
      none: '',
      tiny: 'Tiny',
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      big: 'Big'
    };
    const defaultSize = 'large';
    const sizeChange = select(sizeLabel, sizeOptions, defaultSize);
    return (
      <Grid centered columns={3}>
        <Column>
          <Segment textAlign="center">
            <Image src={paragraphImg} />

            <Rail
              attached={attachedChange}
              dividing={dividingChange}
              internal={internalChange}
              position="left"
              size={sizeChange}
            >
              <Segment>Left Rail Content</Segment>
            </Rail>

            <Rail
              attached={attachedChange}
              dividing={dividingChange}
              internal={internalChange}
              position="right"
              size={sizeChange}
            >
              <Segment>Right Rail Content</Segment>
            </Rail>
          </Segment>
        </Column>
      </Grid>
    );
  })
);
