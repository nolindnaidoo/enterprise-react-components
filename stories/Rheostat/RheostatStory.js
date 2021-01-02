import React, { PureComponent } from 'react';
import {
  Container,
  Divider,
  List,
  ListContent,
  ListHeader,
  Rheostat
} from '../../src/Components';
import './Rheostat.css';

export default class RheostatStory extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      values: props.values || [0] //eslint-disable-line
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(sliderState) {
    this.setState({
      values: sliderState.values
    });
  }

  render() {
    const { formatValue } = this.props; //eslint-disable-line

    return (
      <Container
        style={{
          height: '50%',
          width: '50%'
        }}
      >
        <Container fluid style={{ position: 'relative' }}>
          <Rheostat
            {...this.props}
            onValuesUpdated={this.updateValue}
            values={this.state.values}
          />
        </Container>
        <List style={{ paddingTop: 50 }}>
          <ListHeader style={{ textAlign: 'center' }}>Values</ListHeader>
          <Divider />
          {this.state.values.map(value => (
            <ListContent
              key={value}
              style={{ float: 'left', marginLeft: 105, textAlign: 'center' }}
            >
              ${formatValue ? formatValue(value) : value}
            </ListContent>
          ))}
        </List>
      </Container>
    );
  }
}
