import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Image,
  Menu,
  MenuItem,
  Segment
} from '../../src/Components';
import paragraph from '../../public/assets/images/paragraph.png';

export default class MenuStory extends PureComponent {
  state = { activeItem: 'home' };
  render() {
    return (
      <Container>
        <Menu
          borderless={this.props.borderless}
          color={this.props.color}
          fixed={this.props.fixed}
          inverted={this.props.inverted}
          pointing={this.props.pointing}
          secondary={this.props.secondary}
          size={this.props.size}
          stackable={this.props.stackable}
          tabular={this.props.tabular}
          text={this.props.text}
          vertical={this.props.vertical}
        >
          <MenuItem
            disabled={this.props.disabled}
            header={this.props.header}
            name="home"
            active={this.state.activeItem === 'home'}
            onClick={(e, { name }) => {
              this.setState({ activeItem: name });
            }}
          />
          <MenuItem
            disabled={this.props.disabled}
            header={this.props.header}
            name="messages"
            active={this.state.activeItem === 'messages'}
            onClick={(e, { name }) => {
              this.setState({ activeItem: name });
            }}
          />
          <MenuItem
            disabled={this.props.disabled}
            header={this.props.header}
            name="friends"
            active={this.state.activeItem === 'friends'}
            onClick={(e, { name }) => {
              this.setState({ activeItem: name });
            }}
          />
        </Menu>
        <Segment>
          <Image src={paragraph} />
        </Segment>
      </Container>
    );
  }
}

MenuStory.propTypes = {
  borderless: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  fixed: PropTypes.string,
  header: PropTypes.bool,
  inverted: PropTypes.bool,
  pointing: PropTypes.bool,
  secondary: PropTypes.bool,
  size: PropTypes.string,
  stackable: PropTypes.bool,
  tabular: PropTypes.bool,
  text: PropTypes.bool,
  vertical: PropTypes.bool
};
