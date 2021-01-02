import React, { PureComponent } from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Modal,
  ModalActions,
  ModalContent,
  ModalDescription,
  ModalHeader
} from '../../src/Components';
import imageOne from '../../public/assets/images/300.png';
import imageTwo from '../../public/assets/images/paragraph.png';

export default class ModalScrolling extends PureComponent {
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
          Scrolling Modal
        </Button>
        <Modal open={this.state.viewModal}>
          <ModalHeader>Profile Picture</ModalHeader>
          <ModalContent image scrolling>
            <Image wrapped size="medium" src={imageOne} />
            <ModalDescription>
              <Header>Modal Header</Header>
              <p>
                This is an example of expanded content that will cause the
                modal's dimmer to scroll
              </p>
              <Image src={imageTwo} />
              <Image src={imageTwo} />
              <Image src={imageTwo} />
              <Image src={imageTwo} />
              <Image src={imageTwo} />
              <Image src={imageTwo} />
              <Image src={imageTwo} />
              <Image src={imageTwo} />
              <Image src={imageTwo} />
            </ModalDescription>
          </ModalContent>
          <ModalActions>
            <Button
              onClick={() => {
                this.setState({ viewModal: false });
              }}
              primary
            >
              Proceed <Icon name="right chevron" />
            </Button>
          </ModalActions>
        </Modal>
      </Container>
    );
  }
}
