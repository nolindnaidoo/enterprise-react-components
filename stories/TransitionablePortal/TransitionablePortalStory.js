import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Header,
  Segment,
  TransitionablePortal
} from '../../src/Components';

export default class TransitionablePortalStory extends PureComponent {
  state = {
    open: false
  };

  render() {
    return (
      <Container>
        <Button
          negative={this.state.open}
          positive={!this.state.open}
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open ? 'Close Portal' : 'Open Portal'}
        </Button>
        <TransitionablePortal
          onClose={() => {
            this.setState({ open: false });
          }}
          open={this.state.open}
          transition={this.props.transition}
        >
          <Segment
            style={{ left: '40%', position: 'fixed', top: '30%', zIndex: 1 }}
          >
            <Header>This is a controlled portal</Header>
            <p>Portals have tons of great callback functions to hook into.</p>
            <p>To close, simply click the close button or click away</p>
          </Segment>
        </TransitionablePortal>
      </Container>
    );
  }
}

TransitionablePortalStory.propTypes = {
  transition: PropTypes.shape({
    animation: PropTypes.string,
    duration: PropTypes.number
  })
};
