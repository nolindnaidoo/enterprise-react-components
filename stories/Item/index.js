import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemGroup,
  ItemImage,
  ItemHeader,
  ItemMeta
} from '../../src/Components';
import imageFile from '../../public/assets/images/300.png';

const stories = storiesOf('Item', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo(
    'An item view presents large collections of site content for display.'
  )(() => {
    const divided = boolean('Divided', false);

    const image = {
      src: imageFile
    };

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
    const defaultSize = 'tiny';
    const sizeChange = select(sizeLabel, sizeOptions, defaultSize);

    const style = {
      padding: 20
    };

    const verticalAlignLabel = 'Vertical Align';
    const verticalAlignOptions = {
      bottom: 'Bottom',
      middle: 'Middle',
      top: 'Top'
    };
    const defaultAlignment = '';
    const verticalAlignChange = select(
      verticalAlignLabel,
      verticalAlignOptions,
      defaultAlignment
    );
    return (
      <div>
        <ItemGroup divided={divided}>
          <div style={object('Style', style)}>
            <Item>
              <ItemContent verticalAlign={verticalAlignChange}>
                <ItemHeader as="h2">Header Example</ItemHeader>
                <ItemMeta as="h4">Description</ItemMeta>
                <ItemImage size={sizeChange} src={image.src} />
                <ItemDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  scelerisque auctor odio semper mattis. Vivamus sit amet tellus
                  ut risus rutrum lobortis eu ut mi. Nullam nunc nibh, cursus ac
                  erat vitae, volutpat imperdiet purus. Nam tincidunt convallis
                  nisl, nec auctor arcu viverra vel. Pellentesque sagittis
                  mattis rhoncus. Vivamus volutpat porta diam ac sollicitudin.
                  Sed tincidunt ligula eleifend, pellentesque ipsum a, porta
                  tortor. Sed sed magna sit amet elit fermentum luctus. Nam
                  lacinia nunc nec iaculis congue. Fusce tristique tincidunt
                  lectus, tempor egestas tellus egestas non. Praesent eget
                  pellentesque nulla. Sed ac placerat odio.
                </ItemDescription>
                <ItemExtra as="h5">Additional Details</ItemExtra>
              </ItemContent>
            </Item>
          </div>
          <div style={object('Style', style)}>
            <Item>
              <ItemContent verticalAlign={verticalAlignChange}>
                <ItemHeader as="h2">Header Example</ItemHeader>
                <ItemMeta as="h4">Description</ItemMeta>
                <ItemImage size={sizeChange} src={image.src} />
                <ItemDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  scelerisque auctor odio semper mattis. Vivamus sit amet tellus
                  ut risus rutrum lobortis eu ut mi. Nullam nunc nibh, cursus ac
                  erat vitae, volutpat imperdiet purus. Nam tincidunt convallis
                  nisl, nec auctor arcu viverra vel. Pellentesque sagittis
                  mattis rhoncus. Vivamus volutpat porta diam ac sollicitudin.
                  Sed tincidunt ligula eleifend, pellentesque ipsum a, porta
                  tortor. Sed sed magna sit amet elit fermentum luctus. Nam
                  lacinia nunc nec iaculis congue. Fusce tristique tincidunt
                  lectus, tempor egestas tellus egestas non. Praesent eget
                  pellentesque nulla. Sed ac placerat odio.
                </ItemDescription>
                <ItemExtra as="h5">Additional Details</ItemExtra>
              </ItemContent>
            </Item>
          </div>
        </ItemGroup>
      </div>
    );
  })
);
