import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import StatisticLabel from '../StatisticLabel';

configure({ adapter: new Adapter() });

describe('<StatisticLabel /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <StatisticLabel as="a" className="statisticLabel-custom" style={{}}>
        children
      </StatisticLabel>
    );
    expect(wrapper.find('StatisticLabel').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'statisticLabel statisticLabel-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <StatisticLabel as="a" className="statisticLabel-custom" style={{}}>
        children
      </StatisticLabel>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
