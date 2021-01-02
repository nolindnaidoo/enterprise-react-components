import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import {
  Feed,
  FeedContent,
  FeedDate,
  FeedEvent,
  FeedExtra,
  FeedLabel,
  FeedLike,
  FeedMeta,
  FeedSummary,
  FeedUser,
  Icon
} from '../../src/Components';
import mattImg from '../../public/assets/images/matt.jpg';
import elliotImg from '../../public/assets/images/elliot.jpg';
import helenImg from '../../public/assets/images/helen.jpg';
import wireframeImg1 from '../../public/assets/images/wireframeImg1.png';
import wireframeImg2 from '../../public/assets/images/wireframeImg2.png';

const stories = storiesOf('Feed', module);
stories.addDecorator(withKnobs);

const extraImages = [wireframeImg1, wireframeImg2];

stories.add(
  'Standard',
  withInfo('A Feed displays user feedback to site content.')(() => {
    const sizeOptions = {
      none: '',
      fullscreen: 'Fullscreen',
      large: 'Large',
      mini: 'Mini',
      small: 'Small',
      tiny: 'Tiny'
    };
    const sizeChange = select('Size', sizeOptions, 'large');
    return (
      <Feed size={sizeChange}>
        <FeedEvent>
          <FeedLabel image={mattImg} />
          <FeedContent
            date="3 days ago"
            summary="You added Matt to your coworker group."
          />
        </FeedEvent>
      </Feed>
    );
  })
);

stories.add(
  'Feed with Likes and Images',
  withInfo('A Feed displays user feedback to site content.')(() => {
    const sizeOptions = {
      none: '',
      fullscreen: 'Fullscreen',
      large: 'Large',
      mini: 'Mini',
      small: 'Small',
      tiny: 'Tiny'
    };
    const sizeChange = select('Size', sizeOptions, 'large');
    return (
      <Feed size={sizeChange}>
        <FeedEvent>
          <FeedLabel image={elliotImg} />
          <FeedContent>
            <FeedSummary>
              <FeedUser>Elliot Fu</FeedUser> added you as a friend
              <FeedDate>3 days ago</FeedDate>
            </FeedSummary>
            <FeedMeta>
              <FeedLike>
                <Icon name="like" />4 Likes
              </FeedLike>
            </FeedMeta>
          </FeedContent>
        </FeedEvent>
        <FeedEvent>
          <FeedLabel icon="pencil" />
          <FeedContent>
            <FeedSummary>
              <FeedUser>Elliot Fu</FeedUser> added you as a friend
              <FeedDate>3 days ago</FeedDate>
            </FeedSummary>
            <FeedExtra text>
              I am having a BBQ this weekend Come by around 4pm if you can
            </FeedExtra>
            <FeedMeta>
              <FeedLike>
                <Icon name="like" /> 5 likes
              </FeedLike>
            </FeedMeta>
          </FeedContent>
        </FeedEvent>
        <FeedEvent>
          <FeedLabel image={helenImg} />
          <FeedContent>
            <FeedDate>3 days ago</FeedDate>
            <FeedSummary>
              <a href="https://www.integratedauctionsolutions.com">
                Helen Troy
              </a>{' '}
              added{' '}
              <a href="https://www.integratedauctionsolutions.com">
                2 new illustrations
              </a>
            </FeedSummary>
            <FeedExtra images={extraImages} />
            <FeedMeta like="5 likes" />
          </FeedContent>
        </FeedEvent>
      </Feed>
    );
  })
);
