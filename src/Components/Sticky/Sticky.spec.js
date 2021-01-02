import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Sticky from '../Sticky';

configure({ adapter: new Adapter() });

describe('<Sticky /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Sticky
        active
        as="span"
        bottomOffset={0}
        className="sticky-custom"
        context={{}}
        offset={0}
        onBottom={Function}
        onStick={Function}
        onTop={Function}
        onUnstick={Function}
        pushing
        style={{}}
      >
        children
      </Sticky>
    );
    expect(wrapper.find('Sticky').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('span');
    expect(wrapper.prop('bottomOffset')).toEqual(0);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('sticky sticky-custom');
    expect(wrapper.prop('context')).toEqual({});
    expect(wrapper.prop('offset')).toEqual(0);
    expect(wrapper.prop('onBottom')).toEqual(Function);
    expect(wrapper.prop('onStick')).toEqual(Function);
    expect(wrapper.prop('onTop')).toEqual(Function);
    expect(wrapper.prop('onUnstick')).toEqual(Function);
    expect(wrapper.prop('pushing')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Sticky
        active
        as="span"
        bottomOffset={0}
        className="sticky-custom"
        context={{}}
        offset={0}
        onBottom={Function}
        onStick={Function}
        onTop={Function}
        onUnstick={Function}
        pushing
        style={{}}
      >
        children
      </Sticky>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
