import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Progress from '../Progress';

configure({ adapter: new Adapter() });

describe('<Progress /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Progress
        active
        as="a"
        attached="top"
        autoSuccess
        className="progress-custom"
        color="blue"
        disabled
        error
        indicating
        inverted
        percent={100}
        precision={10}
        progress="percent"
        size="medium"
        style={{}}
        success
        warning
      >
        children
      </Progress>
    );
    expect(wrapper.find('Progress').length).toBe(1);
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('attached')).toEqual('top');
    expect(wrapper.prop('autoSuccess')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('progress progress-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('error')).toEqual(true);
    expect(wrapper.prop('indicating')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('percent')).toEqual(100);
    expect(wrapper.prop('precision')).toEqual(10);
    expect(wrapper.prop('progress')).toEqual('percent');
    expect(wrapper.prop('size')).toEqual('medium');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('success')).toEqual(true);
    expect(wrapper.prop('warning')).toEqual(true);
  });

  it('has total & value props', () => {
    const wrapper = shallow(<Progress label="text" total={100} value={100} />);
    expect(wrapper.prop('label')).toEqual('text');
    expect(wrapper.prop('total')).toEqual(100);
    expect(wrapper.prop('value')).toEqual(100);
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Progress
        active
        as="a"
        attached="top"
        autoSuccess
        className="progress-custom"
        color="blue"
        disabled
        error
        indicating
        inverted
        percent={100}
        precision={10}
        progress="percent"
        size="medium"
        style={{}}
        success
        warning
      >
        children
      </Progress>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Progress label="text" total={100} value={100} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
