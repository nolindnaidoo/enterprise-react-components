import React from 'react';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

configure({ adapter: new Adapter() });

describe('<Header /> component', () => {
  it('has props & children', () => {
    const wrapper = shallow(
      <Header
        as="a"
        attached="top"
        block
        className="header-custom"
        color="blue"
        disabled
        dividing
        floated="left"
        icon
        inverted
        size="medium"
        style={{}}
        sub
        textAlign="center"
      >
        children
      </Header>
    );
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.prop('as')).toEqual('a');
    expect(wrapper.prop('attached')).toEqual('top');
    expect(wrapper.prop('block')).toEqual(true);
    expect(wrapper.prop('children')).toEqual('children');
    expect(wrapper.prop('className')).toEqual('header header-custom');
    expect(wrapper.prop('color')).toEqual('blue');
    expect(wrapper.prop('disabled')).toEqual(true);
    expect(wrapper.prop('dividing')).toEqual(true);
    expect(wrapper.prop('floated')).toEqual('left');
    expect(wrapper.prop('icon')).toEqual(true);
    expect(wrapper.prop('inverted')).toEqual(true);
    expect(wrapper.prop('size')).toEqual('medium');
    expect(wrapper.prop('style')).toEqual({});
    expect(wrapper.prop('sub')).toEqual(true);
    expect(wrapper.prop('textAlign')).toEqual('center');
  });

  test('snapshot', () => {
    const component = renderer.create(
      <Header
        as="a"
        attached="top"
        block
        className="header-custom"
        color="blue"
        disabled
        dividing
        floated="left"
        icon
        inverted
        size="medium"
        style={{}}
        sub
        textAlign="center"
      >
        children
      </Header>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
