import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import HeaderContent from '../HeaderContent';

configure({ adapter: new Adapter() });

describe('<HeaderContent /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <HeaderContent as="a" className="headerContent-custom" style={{}}>
        children
      </HeaderContent>
    );
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'headerContent headerContent-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot', () => {
    const component = renderer.create(
      <HeaderContent as="a" className="headerContent-custom" style={{}}>
        children
      </HeaderContent>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
