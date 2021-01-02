import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Menu,
  MenuItem,
  Segment,
  Sidebar,
  SidebarPushable,
  SidebarPusher
} from '../../src/Components';
import paragraph from '../../public/assets/images/paragraph.png';

export default class SidebarStory extends PureComponent {
  state = { visible: false };

  render() {
    return (
      <Container>
        <Button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          Toggle Visibility
        </Button>
        <SidebarPushable as={Segment}>
          <Sidebar
            as={Menu}
            animation={this.props.animation}
            icon="labeled"
            inverted={this.props.inverted}
            stackable
            vertical
            visible={this.state.visible}
            width={this.props.width}
          >
            <MenuItem name="home">
              <Icon name="home" />
              Home
            </MenuItem>
            <MenuItem name="gamepad">
              <Icon name="gamepad" />
              Games
            </MenuItem>
            <MenuItem name="camera">
              <Icon name="camera" />
              Channels
            </MenuItem>
          </Sidebar>
          <SidebarPusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Image src={paragraph} />
            </Segment>
          </SidebarPusher>
        </SidebarPushable>
      </Container>
    );
  }
}

SidebarStory.propTypes = {
  animation: PropTypes.string,
  inverted: PropTypes.bool,
  width: PropTypes.string
};

/* <Container>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <SidebarPushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            inverted
          >
            <MenuItem name="home">
              <Icon name="home" />
              Home
            </MenuItem>
            <MenuItem name="gamepad">
              <Icon name="gamepad" />
              Games
            </MenuItem>
            <MenuItem name="camera">
              <Icon name="camera" />
              Channels
            </MenuItem>
          </Sidebar>
          <SidebarPusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Image src="/assets/images/wireframe/paragraph.png" />
            </Segment>
          </SidebarPusher>
        </SidebarPushable>
      </Container> */
