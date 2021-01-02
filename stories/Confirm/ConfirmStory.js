import React, { PureComponent } from 'react';
import { Button, Confirm, Container } from '../../src/Components';

export default class ConfirmStory extends PureComponent {
  state = { open: false };

  render() {
    return (
      <Container>
        <Button
          onClick={() => {
            this.setState({ open: true });
          }}
        >
          Show
        </Button>
        <Confirm
          {...this.props}
          open={this.state.open}
          onCancel={() => {
            this.setState({ open: false });
          }}
          onConfirm={() => {
            this.setState({ open: false });
          }}
        />
      </Container>
    );
  }
}
