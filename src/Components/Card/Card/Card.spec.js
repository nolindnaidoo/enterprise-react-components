import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../Card';

configure({ adapter: new Adapter() });

describe('<Card /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Card
        as="a"
        centered
        className="card-custom"
        color="blue"
        fluid
        href="string"
        link
        onClick={Function}
        raised
        style={{}}
      >
        children
      </Card>
    );
    expect(wrapper.find('Card').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('centered')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('card card-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('fluid')).toEqual(true);
    expect(wrapper.prop('href')).toEqual('string');
    expect(wrapper.prop('link')).toEqual(true);
    wrapper.find('onClick');
    wrapper.simulate('click');
    expect(wrapper.prop('raised')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has description prop', () => {
    const wrapper = shallow(<Card description="test" />);
    expect(wrapper.prop('description')).toEqual('test');
  });

  it('has extra prop', () => {
    const wrapper = shallow(<Card extra={<div />} />);
    expect(wrapper.prop('extra')).toEqual(<div />);
  });

  it('has header prop', () => {
    const wrapper = shallow(<Card header="Header" />);
    expect(wrapper.prop('header')).toEqual('Header');
  });

  it('has image prop', () => {
    const wrapper = shallow(<Card image="src" />);
    expect(wrapper.prop('image')).toEqual('src');
  });

  it('has meta prop', () => {
    const wrapper = shallow(<Card meta="friend" />);
    expect(wrapper.prop('meta')).toEqual('friend');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Card
        as="a"
        centered
        className="card-custom"
        color="blue"
        fluid
        href="string"
        link
        onClick={Function}
        raised
        style={{}}
      >
        children
      </Card>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Card description="test" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Card extra={<div />} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Card header="Header" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Card image="src" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Card meta="friend" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
