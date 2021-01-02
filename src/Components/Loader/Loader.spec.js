import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Loader from '../Loader';

configure({ adapter: new Adapter() });

describe('<Loader /> component', () => {
  it('has props and children', () => {
    const wrapper = shallow(
      <Loader
        active
        as="a"
        className="loader-custom"
        disabled
        indeterminate
        inline="centered"
        inverted
        style={{}}
        size="small"
      >
        children
      </Loader>
    );
    expect(wrapper.find('Loader').length).toBe(1);
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('active')).toEqual(true);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('loader loader-custom');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('indeterminate')).toEqual(true);
    expect(wrapper.prop('inline')).toEqual('centered');
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('small');
    expect(wrapper.prop('style')).toEqual({});
  });

  test('snapshot test', () => {
    const component = renderer.create(
      <Loader
        active
        as="a"
        className="loader-custom"
        disabled
        indeterminate
        inline="centered"
        inverted
        size="small"
        style={{}}
      >
        children
      </Loader>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
