import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ImageGroup from '../ImageGroup';

configure({ adapter: new Adapter() });

describe('<ImageGroup /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <ImageGroup as="a" className="imageGroup-custom" size="medium" style={{}}>
        children
      </ImageGroup>
    );
    expect(wrapper.find('ImageGroup').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('imageGroup imageGroup-custom');
    expect(wrapper.prop('size')).toEqual('medium');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <ImageGroup as="a" className="imageGroup-custom" size="medium" style={{}}>
        children
      </ImageGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
