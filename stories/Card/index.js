import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardGroup,
  CardHeader,
  CardMeta,
  Container,
  Icon,
  Image
} from '../../src/Components';
import imageFile from '../../public/assets/images/300.png';

const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'A card displays site content in a manner similar to a playing card.'
  )(() => {
    const centered = boolean('Centered', false);

    const colorLabel = 'Color';
    const colorOptions = {
      none: '',
      red: 'Red',
      orange: 'Orange',
      yellow: 'Yellow',
      olive: 'Olive',
      green: 'Green',
      teal: 'Teal',
      blue: 'Blue',
      violet: 'Violet',
      purple: 'Purple',
      pink: 'Pink',
      brown: 'Brown',
      grey: 'Grey',
      black: 'Black'
    };
    const defaultColor = '';
    const colorChange = select(colorLabel, colorOptions, defaultColor);

    const fluid = boolean('Fluid', false);

    const image = {
      src: imageFile
    };

    const raised = boolean('Raised', false);
    return (
      <Card
        centered={centered}
        color={colorChange}
        fluid={fluid}
        onClick={action('clicked')}
        raised={raised}
      >
        <Image src={image.src} />
        <CardContent>
          <CardHeader>James</CardHeader>
          <CardMeta>
            <span className="date">Joined in 2017</span>
          </CardMeta>
          <CardDescription>
            James is a musician living in Columbus.
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <a href="https://www.integratedauctionsolutions.com">
            <Icon name="user" />
            22 Friends
          </a>
        </CardContent>
      </Card>
    );
  })
);

stories.add(
  'Group',
  withInfo('A group of cards.')(() => {
    const image = {
      src: imageFile
    };

    return (
      <CardGroup itemsPerRow="one">
        <Card>
          <CardContent>
            <Image circular floated="right" size="tiny" src={image.src} />
            <CardHeader>Steve Sanders</CardHeader>
            <CardMeta>Friends of Elliot</CardMeta>
            <CardDescription>
              Steve wants to add you to the group <strong>best friends</strong>
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <Container className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </Container>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Image circular floated="right" size="tiny" src={image.src} />
            <CardHeader>Molly Thomas</CardHeader>
            <CardMeta>New User</CardMeta>
            <CardDescription>
              Molly wants to add you to the group <strong>musicians</strong>
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <Container className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </Container>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Image circular floated="right" size="tiny" src={image.src} />
            <CardHeader>Jenny Lawrence</CardHeader>
            <CardMeta>New User</CardMeta>
            <CardDescription>
              Jenny requested permission to view your contact details
            </CardDescription>
          </CardContent>
          <CardContent extra>
            <Container className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </Container>
          </CardContent>
        </Card>
      </CardGroup>
    );
  })
);
