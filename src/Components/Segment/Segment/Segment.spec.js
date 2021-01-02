import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Segment from '../Segment';

configure({ adapter: new Adapter() });

describe('<Segment /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Segment
        as="a"
        attached="top"
        basic
        circular
        className="segment-custom"
        clearing
        color="blue"
        compact
        disabled
        floated="left"
        inverted
        loading
        size="large"
        textAlign="center"
        vertical
      >
        children
      </Segment>
    );
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('attached')).toEqual('top');
    expect(wrapper.prop('basic')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('segment segment-custom');
    expect(wrapper.prop('clearing')).toEqual(true);
    expect(wrapper.prop('circular')).toEqual(true);
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('compact')).toEqual(true);
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('floated')).toEqual('left');
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('loading')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('textAlign')).toEqual('center');
    expect(wrapper.prop('vertical')).toEqual(true);
  });

  it('has props and children', () => {
    const wrapper = shallow(<Segment tertiary>children</Segment>);
    expect(wrapper.prop('tertiary')).toEqual(true);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Segment
        as="a"
        attached="top"
        basic
        circular
        className="segment-custom"
        clearing
        color="blue"
        compact
        disabled
        floated="left"
        inverted
        loading
        size="large"
        textAlign="center"
        vertical
      >
        children
      </Segment>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Segment tertiary>children</Segment>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
