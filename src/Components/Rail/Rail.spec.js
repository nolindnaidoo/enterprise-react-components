import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Rail from '../Rail';

configure({ adapter: new Adapter() });

describe('<Rail /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Rail
        as="span"
        attached
        className="rail-custom"
        close
        dividing
        internal
        position="left"
        size="large"
        style={{}}
      >
        children
      </Rail>
    );
    expect(wrapper.find('Rail').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('attached')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('rail rail-custom');
    expect(wrapper.prop('close')).toEqual(true);
    expect(wrapper.prop('dividing')).toEqual(true);
    expect(wrapper.prop('internal')).toEqual(true);
    expect(wrapper.prop('position')).toEqual('left');
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has content prop', () => {
    const wrapper = shallow(<Rail content="content" position="left" />);
    expect(wrapper.prop('content')).toEqual('content');
    expect(wrapper.prop('position')).toEqual('left');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Rail
        as="span"
        attached
        className="rail-custom"
        close
        dividing
        internal
        position="left"
        size="large"
        style={{}}
      >
        children
      </Rail>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Rail content="content" position="left" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
