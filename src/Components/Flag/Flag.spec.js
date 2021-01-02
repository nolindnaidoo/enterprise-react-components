import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Flag from '../Flag';

configure({ adapter: new Adapter() });

describe('<Flag /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Flag as="a" className="flag-custom" name="ad" style={{}} />
    );
    expect(wrapper.find('Flag').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('flag flag-custom');
    expect(wrapper.prop('name')).toEqual('ad');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Flag as="a" className="flag-custom" name="ad" style={{}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
