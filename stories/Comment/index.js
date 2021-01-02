import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {
  Comment,
  CommentActions,
  CommentAuthor,
  CommentAvatar,
  CommentContent,
  CommentGroup,
  CommentMetadata,
  CommentText
} from '../../src/Components';
import mattImg from '../../public/assets/images/matt.jpg';
import joeImg from '../../public/assets/images/joe.jpg';
import helenImg from '../../public/assets/images/helen.jpg';
import elliotImg from '../../public/assets/images/elliot.jpg';

const stories = storiesOf('Comment', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A comment displays user feedback to site content.')(() => {
    const collapsedChange = boolean('Collapsed', false);
    const sizeOptions = {
      none: '',
      mini: 'Mini',
      tiny: 'Tiny',
      small: 'Small',
      large: 'Large',
      big: 'Big',
      huge: 'Huge',
      massive: 'Massive'
    };
    const sizeChange = select('Size', sizeOptions, 'small');

    const threadedChange = boolean('Threaded', false);
    return (
      <CommentGroup size={sizeChange} threaded={threadedChange}>
        <Comment>
          <CommentAvatar as="a" src={mattImg} />
          <CommentContent>
            <CommentAuthor as="a">Joe</CommentAuthor>
            <CommentMetadata>
              <span>Today at 5:42 PM</span>
            </CommentMetadata>
            <CommentText>How artistic!</CommentText>
            <CommentActions>
              <a href="https://www.integratedauctionsolutions.com">Reply</a>
            </CommentActions>
          </CommentContent>

          <CommentGroup size="small" collapsed={collapsedChange}>
            <Comment>
              <CommentAvatar as="a" src={helenImg} />
              <CommentContent>
                <CommentAuthor as="a">Helen</CommentAuthor>
                <CommentMetadata>
                  <span>Today at 5:42 PM</span>
                </CommentMetadata>
                <CommentText>How artistic!</CommentText>
                <CommentActions>
                  <a href="https://www.integratedauctionsolutions.com">Reply</a>
                </CommentActions>
              </CommentContent>
            </Comment>
            <Comment>
              <CommentAvatar as="a" src={elliotImg} />
              <CommentContent>
                <CommentAuthor as="a">Elliot Fu</CommentAuthor>
                <CommentMetadata>
                  <span>5 days ago</span>
                </CommentMetadata>
                <CommentText>Dude, this is awesome Thanks so much</CommentText>
                <CommentActions>
                  <a href="https://www.integratedauctionsolutions.com">Reply</a>
                </CommentActions>
              </CommentContent>
            </Comment>
          </CommentGroup>
        </Comment>
        <Comment>
          <CommentAvatar as="a" src={joeImg} />
          <CommentContent>
            <CommentAuthor as="a">Joe Henderson</CommentAuthor>
            <CommentMetadata>
              <span>5 days ago</span>
            </CommentMetadata>
            <CommentText>Dude, this is awesome Thanks so much</CommentText>
            <CommentActions>
              <a href="https://www.integratedauctionsolutions.com">Reply</a>
            </CommentActions>
          </CommentContent>
        </Comment>
      </CommentGroup>
    );
  })
);
