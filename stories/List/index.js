import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {
  Container,
  Image,
  List,
  ListContent,
  ListHeader,
  ListItem,
  ListList
} from '../../src/Components';
import helenImage from '../../public/assets/images/helen.jpg';
import danielImage from '../../public/assets/images/daniel.jpg';
import christianImage from '../../public/assets/images/christian.jpg';

const stories = storiesOf('List', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A list groups related content.')(() => {
    const animatedChange = boolean('Animated', false);
    const bulletedChange = boolean('Bulleted', false);
    const celledChange = boolean('Celled', false);
    const dividedChange = boolean('Divided', false);
    const floatedOptions = {
      left: 'left',
      right: 'right'
    };
    const floatedSelected = 'left';
    const floatedChange = select('Floated', floatedOptions, floatedSelected);
    const horizontalChange = boolean('Horizontal', false);
    const invertedChange = boolean('Inverted', false);
    const linkChange = boolean('Link', false);
    const orderedChange = boolean('Ordered', false);
    const relaxedChange = boolean('Relaxed', false);
    const selectionChange = boolean('Selection', false);
    const sizeOptions = {
      '': '',
      mini: 'mini',
      tiny: 'tiny',
      small: 'small',
      medium: 'medium',
      large: 'large',
      big: 'big',
      huge: 'huge',
      massive: 'massive'
    };
    const sizeSelected = 'large';
    const sizeChange = select('Size', sizeOptions, sizeSelected);
    const verticalAlignOptions = {
      '': '',
      bottom: 'bottom',
      middle: 'middle',
      top: 'top'
    };
    const verticalAlignSelected = '';
    const verticalAlignChange = select(
      'VerticalAlign',
      verticalAlignOptions,
      verticalAlignSelected
    );
    return (
      <Container style={{ overflow: 'hidden' }}>
        <List
          animated={animatedChange}
          bulleted={bulletedChange}
          celled={celledChange}
          divided={dividedChange}
          floated={floatedChange}
          horizontal={horizontalChange}
          inverted={invertedChange}
          link={linkChange}
          ordered={orderedChange}
          relaxed={relaxedChange}
          selection={selectionChange}
          size={sizeChange}
          verticalAlign={verticalAlignChange}
        >
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Jobs</ListItem>
          <ListItem>Team</ListItem>
        </List>
      </Container>
    );
  })
);

stories.add(
  'Animated',
  withInfo('A list can animate to set the current item apart from the list.')(
    () => {
      const animatedChange = boolean('Animated', true);
      const bulletedChange = boolean('Bulleted', false);
      const floatedOptions = {
        left: 'left',
        right: 'right'
      };
      const floatedSelected = 'left';
      const floatedChange = select('Floated', floatedOptions, floatedSelected);
      const orderedChange = boolean('Ordered', false);
      const verticalAlignOptions = {
        bottom: 'bottom',
        middle: 'middle',
        top: 'top'
      };
      const verticalAlignSelected = 'middle';
      const verticalAlignChange = select(
        'VerticalAlign',
        verticalAlignOptions,
        verticalAlignSelected
      );

      const storyStyle = { overflow: 'hidden' };
      return (
        <Container style={storyStyle}>
          <List
            animated={animatedChange}
            bulleted={bulletedChange}
            floated={floatedChange}
            ordered={orderedChange}
            verticalAlign={verticalAlignChange}
          >
            <ListItem>
              <Image avatar src={helenImage} />
              <ListContent>
                <ListHeader>Helen</ListHeader>
              </ListContent>
            </ListItem>
            <ListItem>
              <Image avatar src={christianImage} />
              <ListContent>
                <ListHeader>Christian</ListHeader>
              </ListContent>
            </ListItem>
            <ListItem>
              <Image avatar src={danielImage} />
              <ListContent>
                <ListHeader>Daniel</ListHeader>
              </ListContent>
            </ListItem>
          </List>
        </Container>
      );
    }
  )
);

stories.add(
  'Nested List',
  withInfo('Nested list items.')(() => {
    const bulletedChange = boolean('Bulleted', false);

    const floatedOptions = {
      left: 'left',
      right: 'right'
    };
    const floatedSelected = 'left';
    const floatedChange = select('Floated', floatedOptions, floatedSelected);

    const orderedChange = boolean('Ordered', true);

    const storyStyle = { overflow: 'hidden' };
    return (
      <Container style={storyStyle}>
        <List
          bulleted={bulletedChange}
          floated={floatedChange}
          ordered={orderedChange}
        >
          <ListItem>Cats</ListItem>
          <ListItem>Horses</ListItem>
          <ListItem>
            Dogs
            <ListList>
              <ListItem>Labradoodles</ListItem>
              <ListItem>Shiba Inu</ListItem>
              <ListItem>Mastiff</ListItem>
            </ListList>
          </ListItem>
        </List>
      </Container>
    );
  })
);
