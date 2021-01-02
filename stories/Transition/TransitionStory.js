import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Image, Transition } from '../../src/Components';
import imageOne from '../../public/assets/images/300.png';

export default class TransitionStory extends PureComponent {
  state = { viewContent: false };
  render() {
    return (
      <Container>
        <Transition
          animation={this.props.animation}
          duration={this.props.duration}
          visible={this.state.viewContent}
        >
          <Image src={imageOne} />
        </Transition>
        <Container style={{ paddingTop: 10 }}>
          <Button
            negative={this.state.viewContent}
            onClick={() => {
              this.setState({ viewContent: !this.state.viewContent });
            }}
            positive={!this.state.viewConent}
          >
            {this.state.viewContent ? 'Transition' : 'Transition'}
          </Button>
        </Container>
      </Container>
    );
  }
}

TransitionStory.propTypes = {
  animation: PropTypes.string,
  duration: PropTypes.number
};
