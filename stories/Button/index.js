import React from 'react';
import { storiesOf, action } from '@storybook/react';
import {
  boolean,
  object,
  select,
  text,
  withKnobs
} from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import {
  Button,
  ButtonContent,
  ButtonGroup,
  ButtonOr,
  Icon
} from '../../src/Components';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add(
  'Standard',
  withInfo('A Button indicates a possible user action.')(() => {
    const activeLabel = 'Active';
    const withActive = false;
    const activeChange = boolean(activeLabel, withActive);

    const basicLabel = 'Basic';
    const withBasic = false;
    const basicChange = boolean(basicLabel, withBasic);

    const circularLabel = 'Circular';
    const withCircular = false;
    const circularChange = boolean(circularLabel, withCircular);

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
    const changeColor = select(colorLabel, colorOptions, defaultColor);

    const compactLabel = 'Compact';
    const withCompact = false;
    const compactChange = boolean(compactLabel, withCompact);

    const floatedOptions = {
      none: '',
      left: 'Left',
      right: 'Right'
    };
    const defaultFloated = '';
    const floatedChange = select('Floated', floatedOptions, defaultFloated);

    const fluidLabel = 'Fluid';
    const withFluid = false;
    const fluidChange = boolean(fluidLabel, withFluid);

    const invertedLabel = 'Inverted';
    const withInverted = false;
    const invertedChange = boolean(invertedLabel, withInverted);

    const label = text('Label', 'Button');

    const loadingLabel = 'Loading';
    const withLoading = false;
    const loadingChange = boolean(loadingLabel, withLoading);

    const negativeLabel = 'Negative';
    const withNegative = false;
    const negativeChange = boolean(negativeLabel, withNegative);

    const positiveLabel = 'Positive';
    const withPositive = false;
    const positiveChange = boolean(positiveLabel, withPositive);

    const primaryLabel = 'Primary';
    const withPrimary = false;
    const primaryChange = boolean(primaryLabel, withPrimary);

    const secondaryLabel = 'Secondary';
    const withSecondary = false;
    const secondaryChange = boolean(secondaryLabel, withSecondary);

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
    const changeSize = select(sizeLabel, sizeOptions, defaultSize);

    const style = {
      backgroundColor: '',
      border: '',
      color: ''
    };
    return (
      <Button
        active={activeChange}
        basic={basicChange}
        circular={circularChange}
        color={changeColor}
        compact={compactChange}
        floated={floatedChange}
        fluid={fluidChange}
        inverted={invertedChange}
        loading={loadingChange}
        negative={negativeChange}
        onClick={action('clicked')}
        positive={positiveChange}
        primary={primaryChange}
        secondary={secondaryChange}
        size={changeSize}
        style={object('Style', style)}
      >
        {label}
      </Button>
    );
  })
);

stories.add(
  'Animated',
  withInfo('Buttons can animate to show additional or hidden content.')(() => {
    const animatedLabel = 'Animated Options';
    const animatedOptions = {
      none: true,
      fade: 'Fade',
      vertical: 'Vertical'
    };
    const defaultAnimated = true;
    const changeAnimation = select(
      animatedLabel,
      animatedOptions,
      defaultAnimated
    );
    return (
      <Button animated={changeAnimation} onClick={action('clicked')}>
        <ButtonContent visible>Next</ButtonContent>
        <ButtonContent hidden>-></ButtonContent>
      </Button>
    );
  })
);

stories.add(
  'Conditional',
  withInfo('Button groups can contain conditionals.')(
    withNotes('<ul><li>Requires ButtonGroup</li></ul>')(() => {
      const negativeLabel = 'Negative';
      const withNegative = false;
      const negativeChange = boolean(negativeLabel, withNegative);

      const positiveLabel = 'Positive';
      const withPositive = false;
      const positiveChange = boolean(positiveLabel, withPositive);

      const textLabel = 'Text';
      const defaultText = 'or';
      const textChange = text(textLabel, defaultText);
      return (
        <ButtonGroup>
          <Button negative={negativeChange} onClick={action('clicked')}>
            Cancel
          </Button>
          <ButtonOr text={textChange} />
          <Button onClick={action('clicked')} positive={positiveChange}>
            Save
          </Button>
        </ButtonGroup>
      );
    })
  )
);

stories.add(
  'Labeled',
  withInfo('Button groups can contain conditionals.')(() => (
    <div>
      <Button icon labelPosition="left" onClick={action('clicked')}>
        <Icon name="pause" />
        Pause
      </Button>
      <Button icon labelPosition="right" onClick={action('clicked')}>
        Next
        <Icon name="right arrow" />
      </Button>
    </div>
  ))
);
