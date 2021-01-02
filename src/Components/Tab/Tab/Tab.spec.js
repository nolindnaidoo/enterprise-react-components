import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Tab from '../Tab';

configure({ adapter: new Adapter() });

describe('<Tab /> component', () => {
  it('has props', () => {
    const wrapper = shallow(
      <Tab
        activeIndex={1}
        as="a"
        className="tab-custom"
        onTabChange={Function}
        panes={[]}
        renderActiveOnly
        style={{}}
      />
    );
    expect(wrapper.find('Tab').length).toBe(1);
    expect(wrapper.prop('activeIndex')).toEqual(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('className')).toEqual('tab tab-custom');
    wrapper.find('onTabChange');
    wrapper.simulate('click');
    expect(wrapper.prop('panes')).toEqual([]);
    expect(wrapper.prop('renderActiveOnly')).toEqual(true);
    expect(wrapper.prop('style')).toEqual({});
  });

  it('has defaultActiveIndex prop', () => {
    const wrapper = shallow(<Tab defaultActiveIndex={2} />);
    expect(wrapper.prop('defaultActiveIndex')).toEqual(2);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Tab
        activeIndex={1}
        as="a"
        className="tab-custom"
        onTabChange={Function}
        panes={[]}
        renderActiveOnly
        style={{}}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(<Tab defaultActiveIndex={2} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
