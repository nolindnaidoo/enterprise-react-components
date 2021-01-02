import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Statistic from '../Statistic';

configure({ adapter: new Adapter() });

describe('<Statistic /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Statistic
        as="a"
        className="statistic-custom"
        color="blue"
        floated="left"
        horizontal
        inverted
        size="large"
        style={{}}
        text
      >
        children
      </Statistic>
    );
    expect(wrapper.find('Statistic').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('statistic statistic-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('floated')).toEqual('left');
    expect(wrapper.prop('horizontal')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('large');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('text')).toEqual(true);
  });

  it('has label & value prop', () => {
    const wrapper = shallow(<Statistic label="label" value="10" />);
    expect(wrapper.prop('label')).toEqual('label');
    expect(wrapper.prop('value')).toEqual('10');
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Statistic
        as="a"
        className="statistic-custom"
        color="blue"
        floated="left"
        horizontal
        inverted
        size="large"
        style={{}}
        text
      >
        children
      </Statistic>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot test', () => {
    const component = renderer.create(<Statistic label="label" value="10" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
