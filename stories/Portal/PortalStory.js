import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Column,
  Grid,
  Header,
  Portal,
  Segment
} from '../../src/Components';

export default class PortalStory extends Component {
  state = { open: false };

  render() {
    return (
      <Grid columns={2}>
        <Column>
          <Button
            negative={this.state.open}
            positive={!this.state.open}
            onClick={() => {
              this.setState({ open: !this.state.open });
            }}
          >
            {this.state.open ? 'Close Portal' : 'Open Portal'}
          </Button>
          <Portal
            closeOnDocumentClick={this.props.closeOnDocumentClick}
            closeOnEscape={this.props.closeOnEscape}
            closeOnPortalMouseLeave={this.props.closeOnPortalMouseLeave}
            closeOnTriggerBlur={this.props.closeOnTriggerBlur}
            closeOnTriggerClick={this.props.closeOnTriggerClick}
            closeOnTriggerMouseLeave={this.props.closeOnTriggerMouseLeave}
            onClose={() => {
              this.setState({ open: false });
            }}
            open={this.state.open}
            openOnTriggerClick={this.props.openOnTriggerClick}
            openOnTriggerFocus={this.props.openOnTriggerFocus}
            openOnTriggerMouseEnter={this.props.openOnTriggerMouseEnter}
            prepend={this.props.prepend}
          >
            <Segment
              style={{
                left: '40%',
                position: 'fixed',
                top: '25%',
                zIndex: 1
              }}
            >
              <Header>This is a controlled portal</Header>
              <p>Portals have tons of great callback functions to hook into.</p>
              <p>To close, simply click the close button or click away</p>
            </Segment>
          </Portal>
        </Column>
      </Grid>
    );
  }
}

PortalStory.propTypes = {
  closeOnDocumentClick: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  closeOnPortalMouseLeave: PropTypes.bool,
  closeOnTriggerBlur: PropTypes.bool,
  closeOnTriggerClick: PropTypes.bool,
  closeOnTriggerMouseLeave: PropTypes.bool,
  openOnTriggerClick: PropTypes.bool,
  openOnTriggerFocus: PropTypes.bool,
  openOnTriggerMouseEnter: PropTypes.bool,
  prepend: PropTypes.bool
};
