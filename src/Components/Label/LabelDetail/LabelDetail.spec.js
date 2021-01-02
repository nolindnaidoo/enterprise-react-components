import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import LabelDetail from '../LabelDetail';

configure({ adapter: new Adapter() });

describe('<LabelDetail /> component', () => {
  it('has props as children', () => {
    const wrapper = shallow(
      <LabelDetail as="a" className="labelDetail-custom" style={{}}>
        children
      </LabelDetail>
    );
    expect(wrapper.find('LabelDetail').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('labelDetail labelDetail-custom');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <LabelDetail as="a" className="labelDetail-custom" style={{}}>
        children
      </LabelDetail>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
