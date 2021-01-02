import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Icon from '../Icon';

configure({ adapter: new Adapter() });

describe('<Icon /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Icon
        as="a"
        bordered
        circular
        className="icon-custom"
        color="blue"
        corner
        disabled
        fitted
        flipped="horizontally"
        inverted
        link
        loading
        name="add circle"
        rotated="clockwise"
        size="small"
        style={{}}
      />
    );
    expect(wrapper.find('Icon').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('bordered')).toEqual(true);
    expect(wrapper.prop('circular')).toEqual(true);
    expect(wrapper.prop('className')).toEqual('icon icon-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('corner')).toEqual(true);
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('fitted')).toEqual(true);
    expect(wrapper.prop('flipped')).toEqual('horizontally');
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('link')).toEqual(true);
    expect(wrapper.prop('loading')).toEqual(true);
    expect(wrapper.prop('name')).toEqual('add circle');
    expect(wrapper.prop('rotated')).toEqual('clockwise');
    expect(wrapper.prop('size')).toEqual('small');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Icon
        as="a"
        bordered
        circular
        className="icon-custom"
        color="blue"
        corner
        disabled
        fitted
        flipped="horizontally"
        inverted
        link
        loading
        name="add circle"
        rotated="clockwise"
        size="small"
        style={{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
