import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import IconGroup from '../IconGroup';

configure({ adapter: new Adapter() });

describe('<IconGroup /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <IconGroup as="i" className="iconGroup-custom" size="large" style={{}}>
        children
      </IconGroup>
    );
    expect(wrapper.find('IconGroup').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('i');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('iconGroup iconGroup-custom');
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <IconGroup as="i" className="iconGroup-custom" size="large" style={{}}>
        children
      </IconGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
