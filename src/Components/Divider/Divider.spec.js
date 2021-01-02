import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Divider from '../Divider';

configure({ adapter: new Adapter() });

describe('<Divider /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Divider
        as="a"
        className="divider-custom"
        clearing
        fitted
        horizontal
        inverted
        section
        style={{}}
        vertical
      >
        children
      </Divider>
    );
    expect(wrapper.find('Divider').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('divider divider-custom');
    expect(wrapper.prop('clearing')).toEqual(true);
    expect(wrapper.prop('fitted')).toEqual(true);
    expect(wrapper.prop('horizontal')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('section')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('vertical')).toEqual(true);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Divider
        as="a"
        className="divider-custom"
        clearing
        fitted
        horizontal
        inverted
        section
        style={{}}
        vertical
      >
        children
      </Divider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
