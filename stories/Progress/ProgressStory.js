import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Progress } from '../../src/Components';

export default class ProgressStory extends Component {
  state = {
    value: 20
  };
  render() {
    return (
      <Container>
        <Progress
          active={this.props.active}
          color={this.props.color}
          disabled={this.props.disabled}
          error={this.props.error}
          indicating={this.props.indicating}
          inverted={this.props.inverted}
          progress={this.props.progress}
          size={this.props.size}
          success={this.props.success}
          warning={this.props.warning}
          value={this.state.value}
          total="100"
        >
          Progress
        </Progress>
        <Button
          onClick={() => {
            this.setState({
              value: this.state.value >= 100 ? 20 : this.state.value + 20
            });
          }}
        >
          Increment
        </Button>
      </Container>
    );
  }
}

ProgressStory.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  indicating: PropTypes.bool,
  inverted: PropTypes.bool,
  progress: PropTypes.string,
  size: PropTypes.string,
  success: PropTypes.bool,
  warning: PropTypes.bool
};
