import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import StatisticValue from '../StatisticValue';

configure({ adapter: new Adapter() });

describe('<StatisticValue /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <StatisticValue as="a" className="statisticValue-custom" style={{}} text>
        children
      </StatisticValue>
    );
    expect(wrapper.find('StatisticValue').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'statisticValue statisticValue-custom'
    );
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('text')).toEqual(true);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <StatisticValue as="a" className="statisticValue-custom" style={{}} text>
        children
      </StatisticValue>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
