import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import StatisticGroup from '../StatisticGroup';

configure({ adapter: new Adapter() });

describe('<StatisticGroup /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <StatisticGroup
        as="a"
        className="statisticGroup-custom"
        color="blue"
        horizontal
        inverted
        size="large"
        style={{}}
        widths={10}
      >
        children
      </StatisticGroup>
    );
    expect(wrapper.find('StatisticGroup').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual(
      'statisticGroup statisticGroup-custom'
    );
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('horizontal')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('widths')).toEqual(10);
  });

  it('has items prop', () => {
    const items = [{ key: 'test', label: 'tested' }];
    const wrapper = shallow(<StatisticGroup items={items} />);
    expect(wrapper.prop('items')).toEqual(items);
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <StatisticGroup
        as="a"
        className="statisticGroup-custom"
        color="blue"
        horizontal
        inverted
        size="large"
        style={{}}
        widths={10}
      >
        children
      </StatisticGroup>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<StatisticGroup items={[]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
