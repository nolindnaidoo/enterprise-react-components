import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, object, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {
  Column,
  Grid,
  Header,
  Image,
  Rail,
  Sticky
} from '../../src/Components';
import placeHolder from '../../public/assets/images/300.png';

const stories = storiesOf('Sticky', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'Sticky content stays fixed to the browser viewport while another column of content is visible on the page.'
  )(() => {
    const active = boolean('Active', true);
    const offset = number('Offset', 0);
    const pushing = boolean('Pushing', false);

    const style = {
      marginBottom: 275
    };
    return (
      <Grid centered columns={10} style={object('Style', style)}>
        <Column>
          <div>
            <Rail position="left">
              <Sticky active={active} offset={offset} pushing={pushing}>
                <Header as="h3">Stuck Content</Header>
                <Image src={placeHolder} />
              </Sticky>
            </Rail>
          </div>
        </Column>
      </Grid>
    );
  })
);
