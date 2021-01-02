import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Header,
  Icon,
  Modal,
  ModalActions,
  ModalContent
} from '../../src/Components';

export default class ModalStandard extends PureComponent {
  state = {
    viewModal: false
  };
  render() {
    return (
      <Container>
        <Button
          onClick={() => {
            this.setState({ viewModal: true });
          }}
        >
          Standard Modal
        </Button>
        <Modal
          basic={this.props.basic}
          dimmer={this.props.dimmer}
          open={this.state.viewModal}
        >
          <Header icon="archive" content="Archive Old Messages" />
          <ModalContent>
            <p>
              Your inbox is getting full, would you like us to enable automatic
              archiving of old messages?
            </p>
          </ModalContent>
          <ModalActions>
            <Button
              color="red"
              inverted
              onClick={() => {
                this.setState({ viewModal: false });
              }}
            >
              <Icon name="remove" /> No
            </Button>
            <Button
              color="green"
              inverted
              onClick={() => {
                this.setState({ viewModal: false });
              }}
            >
              <Icon name="checkmark" /> Yes
            </Button>
          </ModalActions>
        </Modal>
      </Container>
    );
  }
}

ModalStandard.propTypes = {
  basic: PropTypes.bool,
  dimmer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['inverted', 'blurring'])
  ])
};
